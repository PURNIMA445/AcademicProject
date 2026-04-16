

# House Rental System

## Overview
The House Rental System is a web-based application developed using Django to connect landlords and tenants on a single platform. It allows landlords to list properties and tenants to search, filter, and request bookings. The system focuses on simplicity, structured database design, and smooth data handling.

The project also includes a recommendation system that suggests properties to users based on their preferences. It uses cosine similarity to compare user preference patterns with available property data and recommend similar properties.

---

## Features

### User Management
- User registration and login
- Role-based access for Tenant and Landlord

### Property Management
- Add, edit, and delete property listings
- Store property details such as price, location, and features

### Search and Filtering
- Search properties by city, price, and features
- Simple filtering system for better results

### Booking System
- Tenants can send booking requests
- Landlords can accept or reject requests
- Booking status tracking (Pending, Approved, Rejected)

### Favorites
- Users can save properties to their favorites list

### Recommendation System
- Uses cosine similarity to match user preferences with property features
- Recommends top properties based on highest similarity scores, using limited dataset data


---

## Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Django (Python)  
- Database: MySQL  
- Libraries: pandas, scikit-learn, Pillow  

---

## Database

The system uses a relational database with the following main tables:

- User  
- Profile  
- Property  
- Booking  
- Favorite  

Relationships are managed using primary and foreign keys to maintain data consistency.

---

## Project Structure

- Authentication app handles user login and registration  
- Property app manages property listings  
- Booking app handles booking requests  
- Main app integrates all modules  

---

## My Contribution

My main contribution in this project was database design and implementation.

- Designed the overall database structure  
- Created and managed Django models  
- Defined relationships between tables using foreign keys  
- Handled database migrations and updates  
- Supported data flow between backend and database  
- Assisted with basic UI structure in some parts  

---

## Setup Instructions

Clone the repository:

```bash
git clone https://github.com/your-username/AcademicProject.git
cd house-rental-system
```

Create virtual environment:

```bash
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Start server:

```bash
python manage.py runserver
```

## Project Details

This is a college-level academic project developed by a team of 4 members as part of the curriculum.
The project was built to demonstrate full-stack web development using Django and relational database design.
