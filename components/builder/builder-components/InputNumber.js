export default function InputNumber (prop, id, register) {
    return <div key={id} className="input input-number">
        <label>
            <p className="input-title">{prop.title}</p>
            <p className="input-description">{prop.description}</p>
        </label>
        <br/>
        <input type="number" placeholder={prop.placeholder} style={prop.style} id={id} {...register?.(prop.name)}>
        </input>
    </div>
};