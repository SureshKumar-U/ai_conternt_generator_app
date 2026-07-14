import app from './app';
import envConfig from './config/envConfig';
const PORT = envConfig?.PORT  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})