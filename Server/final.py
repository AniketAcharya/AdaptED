import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from imblearn.over_sampling import SMOTE
from sklearn.feature_selection import SelectFromModel
from sklearn.preprocessing import OrdinalEncoder
from pymongo import MongoClient

#Loading Dataset
df = pd.read_csv('train.csv')

# Define the categories and their order for each categorical variable
age_categories = ['<=17', '18-24', '25-34', '>=35']
edu_categories = ['Highschool', 'Bachelors', 'Masters']
pre_categories = ['Yes','No']
consump_categories = ['Yes','No']
time_categories = ['Morning', 'Afternoon', 'Evening', 'Night']
device_categories = ['Laptop', 'Mobile', 'Tablet']

# Create an instance of OrdinalEncoder for each categorical variable
age_encoder = OrdinalEncoder(categories=[age_categories])
edu_encoder = OrdinalEncoder(categories=[edu_categories])
pre_encoder = OrdinalEncoder(categories=[pre_categories])
consump_encoder = OrdinalEncoder(categories=[consump_categories])
time_encoder = OrdinalEncoder(categories=[time_categories])
device_encoder = OrdinalEncoder(categories=[device_categories])

# Fit the encoders on the corresponding columns in the training data
age_encoder.fit(df[['Age']])
edu_encoder.fit(df[['Educational status']])
pre_encoder.fit(df[['Previous online learning experience']])
consump_encoder.fit(df[['Do you see time consumption as a big factor while learning']])
time_encoder.fit(df[['Time of the day preferred for learning']])
device_encoder.fit(df[['Device mostly used for learning']])

# Data Cleaning and Transformation
df.drop(['Frequency of studying (in days within a week)', 'Preferred Video Length (in minutes)'], axis=1, inplace=True)
df.loc[df['Previous online learning experience'] == 'No', 'If Yes, what format did you find most engaging and if no enter NA'] = 'NA'
df = df[df['Previous online learning experience'] == 'Yes']

# Handling missing values
# df['Time of the day preferred for learning'].fillna(df['Time of the day preferred for learning'].mode()[0], inplace=True)
# df['Device mostly used for learning'].fillna(df['Device mostly used for learning'].mode()[0], inplace=True)

df.loc[:, 'Time of the day preferred for learning'] = df['Time of the day preferred for learning'].fillna(df['Time of the day preferred for learning'].mode()[0])
df.loc[:, 'Device mostly used for learning'] = df['Device mostly used for learning'].fillna(df['Device mostly used for learning'].mode()[0])

# Encoding categorical variables using OrdinalEncoder
df['Age'] = age_encoder.transform(df[['Age']])
df['Educational status'] = edu_encoder.transform(df[['Educational status']])
df['Previous online learning experience'] = pre_encoder.transform(df[['Previous online learning experience']])
df['Do you see time consumption as a big factor while learning'] = consump_encoder.transform(df[['Do you see time consumption as a big factor while learning']])
df['Time of the day preferred for learning'] = time_encoder.transform(df[['Time of the day preferred for learning']])
df['Device mostly used for learning'] = device_encoder.transform(df[['Device mostly used for learning']])

# Preparing data for training
X = df.drop('If Yes, what format did you find most engaging and if no enter NA', axis=1)
y = df['If Yes, what format did you find most engaging and if no enter NA']

# Encoding the target variable
y = y.map({'Videos': 1, 'Articles': 0})

# Splitting the dataset into the Training set and Test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Handling imbalanced data using SMOTE
smote = SMOTE(random_state=42)
X_train_resampled, y_train_resampled = smote.fit_resample(X_train_scaled, y_train)

# Feature selection using SelectFromModel
selector = SelectFromModel(estimator=RandomForestClassifier(n_estimators=100))
selector.fit(X_train_resampled, y_train_resampled)
X_train_selected = selector.transform(X_train_resampled)
X_test_selected = selector.transform(X_test_scaled)

def execute(age,edu,exp,rating,consume,time,device):
    # User Input and Prediction
    temp=[age,edu,exp,rating,consume,time,device]
    i=0
    user_input = {}
    columns = ['Age', 'Educational status', 'Previous online learning experience', 'How effective is your current learning method','Do you see time consumption as a big factor while learning', 'Time of the day preferred for learning','Device mostly used for learning']

    for column in columns:
        user_input[column] = [temp[i]]
        i=i+1

    user_df = pd.DataFrame(user_input)

    # Encoding categorical variables using OrdinalEncoder
    user_df['Age'] = age_encoder.transform(user_df[['Age']])
    user_df['Educational status'] = edu_encoder.transform(user_df[['Educational status']])
    user_df['Previous online learning experience'] = pre_encoder.transform(user_df[['Previous online learning experience']])
    user_df['Do you see time consumption as a big factor while learning'] =  consump_encoder.transform(user_df[['Do you see time consumption as a big factor while learning']])
    user_df['Time of the day preferred for learning'] = time_encoder.transform(user_df[['Time of the day preferred for learning']])
    user_df['Device mostly used for learning'] = device_encoder.transform(user_df[['Device mostly used for learning']])

    # Feature scaling
    user_df_scaled = scaler.transform(user_df)

    # Feature selection
    user_df_selected = selector.transform(user_df_scaled)

    # Prediction using Random Forest
    rf_model = RandomForestClassifier()
    rf_model.fit(X_train_selected, y_train_resampled)
    prediction = rf_model.predict(user_df_selected)

    if prediction[0] == 1:
        return "Videos"
    else:
        return "Articles"
