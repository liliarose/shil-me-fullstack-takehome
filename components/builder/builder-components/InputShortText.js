export default function InputShortText (prop, id, register){
    return <div key={id} className="input input-short-text">
        <label>
            <p className="input-title">{prop.title}</p>
            <p className="input-description">{prop.description}</p>
        </label>
        <input type="text" placeholder={prop.placeholder} style={prop.style} id={id} {...register?.(prop.name)}>
        </input>
    </div>
};