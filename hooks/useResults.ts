import { useEffect , useState} from 'react';
import yelp from '@/api/yelp';

export default() => {
    const [results, setResults] = useState<any[]>([]);

  
  
  
    const onTermSubmitted = async (term:string) => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 10,
            term,
            location: "san jose",
          },
        });
        setResults(response.data.businesses);
        console.log("Searching for:", term);
        
      } catch (error:any) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error('Error response:', error.response.data);
          console.error('Status:', error.response.status);
        } else if (error.request) {
          // Request was made but no response received
          console.error('Error request:', error.request);
        } else {
          // Something else happened during the request
          console.error('Error:', error.message);
        }
      }
      
      
    };
    //all network request are async
  
    useEffect(() => { onTermSubmitted('pasta')},[])
    return [onTermSubmitted, results] as const; // Ensure return types are correct
};