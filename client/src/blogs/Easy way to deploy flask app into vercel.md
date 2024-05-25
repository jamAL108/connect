Vercel is a leading platform for deploying frontend applications , but vercel has also introduced features to deploy backend servers , in this blog we will learn how to deploy ur flask application into vercel.

## Create Flask server
  1. *Create virtual python environment*
      ```python
      pip install vitualenv  // install the package
      virtualenv venv        // create virtual environment (Each project can have its own set of dependencies, independent of other projects.)

      windows > venv\Scripts\activate   // activate the virtual env
      linux > source ./venv/bin/activate
      ```
   2. *install flask*
      ```python
      pip install flask
      ```
   3. *Basic app setup ( your app should have atleast this config )*
      ```python
      from flask import Flask
      app = Flask(__name__)
      @app.route('/')
      def hello_world():
          return 'Hello World'
      if __name__ == '__main__':
          app.run()
      ```

## Create requirements.txt file
   The requirements.txt file is used to list all the dependencies and their specific versions for a Python project, ensuring consistent and reproducible 
    environments across different setups.

   To generate the `requirements.txt` paste this command in terminal
   ```python
   pip freeze > requirements.txt   /// gather all dependency which your app needed into a single file 
   ```

## Creating vercel configs 
  1. Create index.py
     ```python
     from wsgi import app  // index.py
     ```
  2. Create wsgi.py
     ```python 
     from app import app    // wsgi.py
     
     if __name__ == '__main__':
         app.run(debug=True)
     ```
  3. Create vercel.json
     ```javascript
     {
       "version":2,
       "builds": [
         {
            "src":"./index.py",
            "use": "@vercel/python",
            "config":{"runtime":"python3.10"}  /// specify your py version
         }
      ],
      "routes": [
        {
            "src":"/(.*)",
            "dest":"/"
        }
      ]
     }
     ```

After following these steps , your folder sturture should should like this:-
my_project/
│
├── venv/              # Virtual environment directory /n
├── app.py             # Your main application file   \n
├── index.py           # app entry point     \n
├── requirements.txt   # Dependencies file  \n
├── vercel.json        # vercel config  \n
└── wsgi.py            \n
