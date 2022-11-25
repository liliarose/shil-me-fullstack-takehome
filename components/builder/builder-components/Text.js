export default function Text (prop, i){
    // console.log('text:\n'+text)
    return <p className='default-text' key={i}>
        {prop.placeholder}
    </p>; 
};