# 🏃 Installation

To run this project locally:

1. Clone the repository

```
git clone https://github.com/yubinjodev/cliwant-assignment.git
```

2. Navigate to the project directory

```
cd cliwant-assignment
```

3. Install the dependencies

```
npm i
```

4. Start the development server by running the following command:

```
npm run dev
```

This will start the application at http://localhost:3000 in your browser.

# 🎨 Design Pattern

## Component Organization

- Structured the application using functional components
- Focused on keeping components modular and reusable where necessary

## State Management

- Used React’s useState for simple local states
- Utilized Zustand for complex states that needed to be shared across components

## Data Flow & Props Management

- Followed React’s unidirectional data flow principle
- Used props to pass data between components while avoiding excessive prop drilling

## Project Structure

Reference: https://github.com/alan2207/bulletproof-react

```
src
|
+-- app               # application routes
|
+-- components        # shared components used across the entire application
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- stores            # global state stores
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```
