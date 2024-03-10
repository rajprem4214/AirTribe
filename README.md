# Airtribe

Airtribe is a platform designed to facilitate online courses with multiple instructors and learners.

## Problem Statement

Design a database and APIs for application-based courses on Airtribe.

## Database Design

### Entities

1. **Instructor**
   - Represents an instructor on Airtribe.
   - Attributes: id, name, email, courses, leads, comments.

2. **Course**
   - Represents a course offered by an instructor.
   - Attributes: id, name, max_seats, start_date, instructor_id, leads.

3. **Lead**
   - Represents a learner's application for a course.
   - Attributes: id, name, email, phone_number, linkedin_profile, status, course_id.

4. **Comment**
   - Represents a comment added by an instructor for a lead.
   - Attributes: id, text, lead_id, instructor_id.

### Database Relations

- An instructor can have multiple courses.
- Multiple learners can apply for a course (leads).
- Each lead can have multiple comments from instructors.

## Features

- **Create Course API**: Allows instructors to create a new course.
- **Update Course Details API**: Enables updating course details such as name, max seats, start date, etc.
- **Course Registration API**: Allows learners to apply for a course by providing their details.
- **Lead Update API**: Enables instructors to change the status of a lead (accept/reject/waitlist).
- **Lead Search API**: Allows instructors to search for leads by name or email.
- **Add Comment API**: Enables instructors to add comments for leads.

## Tech Stack

- **Backend Server**: Node.js with Express framework
- **Database**: SQL Database (e.g., PostgreSQL) with TypeORM for ORM
- **Container**: Dockerized Database

## Requirements
- Node JS
- Docker

## Installation

1. Clone the repository:

```bash
git clone https://github.com/rajprem4214/AirTribe.git
cd AirTribe
```

2. Install Dependencies
```bash
npm install
```

3. Run Docker Container
```
docker compose up -d
```

4. Run the server
```
npm start
```

or

```
nodemon src/index.ts
```

## Server URL - [http://127.0.0.1:3000]

## API Reference

### Create Course

- Creates a new course.

- **URL**: `/api/v1/courses/new`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Course Name",
    "max_seats": 20,
    "start_date": "2024-03-15",
    "instructor_id": 1
  }
  ```

### Update Courses

- Updates a course.

- **URL**: `/api/v1/courses/:id`
- **Method**: `PATCH`
- **Request Body**:
  ```json
  {
  "name": "New Course Name",
  "max_seats": 25,
  "start_date": "2024-04-01"
  }
  ```

### Course Registration

- Creates a lead.

- **URL**: `/api/v1/lead/new`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
  "courseId": 2,
  "name": "Learner Name",
  "email": "learner@example.com",
  "phone_number": "1234567890",
  "linkedin_profile": "https://www.linkedin.com/in/learner"
  }
  ```

### Lead Update

- Updates a lead.

- **URL**: `/api/v1/lead/:id`
- **Method**: `PATCH`
- **Request Body**:
  ```json
  {
  "status": "Accepted"
  }
  ```

### Lead Search

- Searches for leads by name or email.

- **URL**: `/api/v1/lead/search?query=<name_or_email>`
- **Method**: `GET`
- **Request Body**:

### Add Comment

- Adds a comment for a lead.

- **URL**: `/api/v1/comment/add`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
  "leadId": "lead_id",
  "text": "Comment text",
  "instructorId": 1
  }
  ```  

## Optimizations
- Implemented Caching for GET api with help of TypeORM to reduce data fetch time. (Effect - 60ms down to 7ms)
  
  
  
