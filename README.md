# 🚀 File Upload API

A clean and modular **Node.js Express API** to upload profile pictures, documents, or media files using **Multer**. This project follows best practices with proper folder structure and error handling.

---

## 📂 Features

- 📁 Upload images, documents, and media files
- ⚙️ Uses `Multer` for multipart/form-data handling
- ✅ Validates file types and limits file size
- 📐 Clean architecture with separate controllers, services, middleware
- 🌐 Easily testable via Postman
- 🧼 Nodemon for auto-reload in development

---

## 🛠️ Tech Stack

| Tech             | Description                    |
|------------------|--------------------------------|
| 🟩 Node.js       | JavaScript runtime              |
| ⚡ Express.js     | Web framework                   |
| 📦 Multer        | File upload middleware          |
| 🔄 Nodemon       | Auto-reloading during dev       |

---

## 🔌 Getting Started

### ✅ Prerequisites

- Node.js ≥ 16
- Postman (for API testing)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/muaaz0333/NodeJS-File-Upload-API.git
   cd NodeJS-File-Upload-API

2. **Install Dependencies**
   ```bash
   npm install
   
3. **Create _uploads_ directory to fetch the files like Storage**


4. **Run the development server**
   ```bash
   npm start
   ```
---
## 📤 API Endpoints

### 📌 POST `/api/upload`

Upload a single file.

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/upload`
- **Body:**
    - **Type:** `form-data`
    - **Key:** `file` (type: File)

### ✅ Success Response
```
{
  "message": "File uploaded successfully",
  "file": {
    "filename": "1689213821899-profile.png",
    "path": "uploads/1689213821899-profile.png",
    "size": 182721,
    "mimeType": "image/png"
  }
}
```

### ❌ Error Responses:
```
{
  "error": "Only images, documents, and media files are allowed"
}

```
---

## 🧪 Testing in Postman

1. Open **Postman**.
2. Set the request method to **POST** and use the following URL:  
http://localhost:3000/api/upload
3. Go to the **Body** tab and select **form-data**.
4. Add a field with the following details:
- **Key**: `file`
- **Type**: `File`
- **Value**: *(choose a file from your system)*
5. Click **Send** ✅

---

## 📸 Supported File Types

- **Images**: `jpeg`, `jpg`, `png`, `bmp`, `gif`, `webp`
- **Documents**: `pdf`, `docx`
- **Media**: `mp4`

---

## 🧹 TODO / Future Enhancements

- ⏳ **File expiration**
- 🗃️ **Upload to cloud storage** (e.g., AWS S3)
- 🛡️ **Auth middleware** for restricted uploads
- 🧼 **File removal endpoint**


---

## 🙌 Follow the Author

Made with ❤️ by **Muaaz Ahmad**  
👨‍💻 GitHub: [@muaaz0333](https://github.com/muaaz0333)  
🔗 LinkedIn: [linkedin.com/in/MuaazAhmad](https://www.linkedin.com/in/expertfullstackdeveloper/)

---