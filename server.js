const app = require('./app'); // Thay thế './app' bằng đường dẫn tới tệp của bạn
const PORT = process.env.PORT || 4001; // Lấy cổng từ biến môi trường hoặc mặc định là 4001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
