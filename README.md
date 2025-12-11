HealthPal – Digital Healthcare Platform

HealthPal is a digital healthcare management platform designed to improve communication between patients, doctors, donors, NGOs, volunteers, and therapy groups. 
The system supports donations, health alerts, workshops, reservations, anonymous therapy chats, inventory management, medical missions, and translation services.

===========================================================================

1. Used Technologies & Tools

Backend:
- NestJS (Node.js + TypeScript)
- TypeORM
- MySQL Database
- JWT Authentication

External APIs:
- Disease.sh API → real-time global & country-specific health alerts
- LibreTranslate API → translation of medical terms & general text

Tools:
- GitHub
- VSCode
- Postman
- Draw.io

===========================================================================

2. System Architecture

The system follows a modular layered architecture:

- Controller Layer → handles HTTP requests
- Service Layer → business logic
- Repository Layer → database operations with TypeORM
- DTO + Validation Layer → class-validator
- Auth Layer → JWT + Guards
- External API Layer → WHO health data & translation API

Why this architecture?
- Scalable  
- Easy to maintain  
- Suitable for adding new modules  
- Clear separation of concerns  

===========================================================================

3. Database Schema (ERD)

The ERD represents all main system modules:
- Doctors, Patients
- Donors, Donations
- NGOs, Medical Missions
- Workshops, Reservations
- Inventory Management
- Anonymous Therapy Chats
- Health Alerts
- Translation

ERD Image Path:
docs/reprt_finsh.drawio.png

===========================================================================

4. URI Structure (Main Endpoints)

Authentication:
POST /login

Patients:
POST   /patients
GET    /patients
GET    /patients/:id
PATCH  /patients/:id
DELETE /patients/:id

Patient Reservations:
POST /patients/:id/reservation

Request Medicine:
POST /patients/:id/requestMedicine
POST /patients/requestMedicine

Doctors:
POST   /doctor
GET    /doctor
GET    /doctor/:id
PATCH  /doctor/:id
DELETE /doctor/:id

Donors:
POST   /donors
GET    /donors
GET    /donors/:id
PATCH  /donors/:id
DELETE /donors/:id

Donation Requests:
POST   /don-req
GET    /don-req
GET    /don-req/:id
PATCH  /don-req/:id
DELETE /don-req/:id
GET    /don-req/dashboard/:id

Medical NGOs:
POST   /medical-ngos
GET    /medical-ngos
GET    /medical-ngos/:id
PATCH  /medical-ngos/:id
DELETE /medical-ngos/:id

Reservations:
POST   /reservations
GET    /reservations
GET    /reservations/:id
PATCH  /reservations/:id
DELETE /reservations/:id

Anonymous Therapy Chats:
POST   /anonymous-therapy-chats
GET    /anonymous-therapy-chats
GET    /anonymous-therapy-chats/:id
DELETE /anonymous-therapy-chats/:id

Health Alerts:
GET  /health-alerts/external
POST /health-alerts/sync/:medical_id/:country

Translation:
POST /translation/medical

===========================================================================

5. External API Integrations

1) Disease.sh API  
Used to fetch:
- Cases  
- Deaths  
- Recoveries  
- Active cases  
- Tests  
- Country info  

Custom endpoint:
POST /health-alerts/sync/:medical_id/:country

2) LibreTranslate API  
Used for:
- Translating symptoms  
- Translating medical terms  
- Supporting multilingual patients  

Endpoint:
POST /translation/medical

===========================================================================

6. GitHub Repository Structure

src/
 ├── auth
 ├── doctors
 ├── patients
 ├── donations
 ├── medical-ngos
 ├── health_alerts
 ├── translation
 ├── inventory
 ├── reservations
 ├── anonymous_therapy_chats
 └── ...

docs/
 └── reprt_finsh.drawio.png

===========================================================================

7. Problem-Solving Approach

The system solves:
- Lack of centralized healthcare coordination  
- Difficulty in donation and NGO management  
- Need for multilingual features  
- Need for up‑to‑date health alerts  

Our approach:
- Modular system design  
- Smart API integrations  
- Secure authentication  
- Clean ERD structure  

===========================================================================

8. Wiki Documentation

The Wiki contains:
- Architecture explanation  
- ERD  
- Features list  
- All endpoints  
- Module descriptions  

Wiki link will be added later.

===========================================================================

9. Running the Project

Install dependencies:
yarn install

Run in development mode:
yarn start:dev

Environment Variables:
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=momoali2003
DB_NAME=healthpal

===========================================================================

Team Members:
- Mahmoud Yaseen
- Ayham Fuqaha
- Abdelfattah Al-Malak

Demo Video:
Will be uploaded later.

Notes:
- Endpoints documented in Postman  
- External API integration tested  
- ERD available in docs/  
