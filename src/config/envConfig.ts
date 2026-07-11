import "dotenv/config"
interface EnvConfig {
  PORT: number;
  MONGO_URI: string;
  GEMINIAI_API_KEY: string;
}

const envConfig: EnvConfig = {
  PORT: parseInt(process.env.PORT as string, 10) || 3000,
  MONGO_URI: process.env.MONGO_URI as string,
  GEMINIAI_API_KEY: process.env.GEMINIAI_API_KEY as string,
};


export default envConfig;