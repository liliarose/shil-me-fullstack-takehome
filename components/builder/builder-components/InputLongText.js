export default function InputLongText (prop, id, register) {
    return <div key={id} className="input input-long-text" >
        <label>
            {prop.title && <p className="input-title">{prop.title}</p>}
            {prop.description && <p className="input-description">{prop.description}</p>}
        </label>
        <br/>
        <textarea placeholder={prop.placeholder} style={prop.style} id={id} {...register?.(prop.name)}/>
    </div>
};
