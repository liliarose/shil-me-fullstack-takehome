export default function Title (prop, i) {
    console.log('title text: ' + prop); 
    return <h1 className='default-title' key={i}>
        {prop.placeholder}
    </h1>; 
};