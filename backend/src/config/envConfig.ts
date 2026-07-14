import "dotenv/config"
interface EnvConfig {
  PORT: number;
  MONGO_URI: string;
  GEMINIAI_API_KEY: string;
  NODE_ENV:string;
  JWT_SECRET:string
}

const envConfig: EnvConfig = {
  PORT: parseInt(process.env.PORT as string, 10) || 3000,
  MONGO_URI: process.env.MONGO_URI as string,
  GEMINIAI_API_KEY: process.env.GEMINIAI_API_KEY as string,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET:process.env.JWT_SECRET! 
};


export default envConfig;