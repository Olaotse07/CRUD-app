## Setup

### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - If you are using Docker, you should configure environment variables in the `docker-compose.yml` file. Look for the `environment` section in the `backend` service definition.
   - If you are running the backend locally without Docker, you can export environment variables directly in your terminal or use another configuration method.

   Example for Docker Compose:

   ```yaml
   services:
     backend:
       image: your-backend-image
       environment:
         - MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
   ```

### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Frontend applications often use environment variables prefixed with `REACT_APP_` in a `.env` file, but if you're not using `.env`, make sure to configure these variables directly in your build or deployment scripts.

   Example for direct configuration (if applicable):

   ```bash
   export REACT_APP_API_URL=http://localhost:5000
   ```

## Running the Application

### Using Docker Compose

1. Navigate to the root of the project directory:

   ```bash
   cd /path/to/your/project
   ```

2. Build and start the application:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the backend, frontend, and MongoDB services.

### Without Docker

1. For the backend, navigate to the `backend` directory and start the server:

   ```bash
   cd backend
   npm start
   ```

2. For the frontend, navigate to the `frontend` directory and start the development server:
   ```bash
   cd frontend
   npm start
   ```

## Docker

To build and run Docker containers:

1. **Build the Docker images** (if you haven't already):

   ```bash
   docker-compose build
   ```

2. **Start the application**:

   ```bash
   docker-compose up
   ```

3. **Stop the application**:
   ```bash
   docker-compose down
   ```
