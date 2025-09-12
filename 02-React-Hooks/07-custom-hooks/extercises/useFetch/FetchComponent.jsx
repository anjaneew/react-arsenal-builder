import useFetch from './useFetch.jsx';

const FetchComponent = () => {
  const { data, loading, error } = useFetch("https://data.colorado.gov/resource/4ykn-tg5h.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flexItem">
      <h3>Fetch Hook</h3>
      <ul>
        {data.map((item) => (
          <li key={item.entityid}>
            <h3>{item.entityname}</h3>
            <p>Address: {item.principaladdress1},</p>
            <p>{item.principalcity}, {item.principalstate}, {item.principalzipcode},{item.principalcountry}.</p>
            <p>Status: {item.entitystatus}</p>
            <p>Type: {item.entitytype}</p>
            <p>Contact: {item.agentfirstname} {item.agentlastname}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchComponent;