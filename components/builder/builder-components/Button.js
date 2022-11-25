export default function Button(prop, i) {
    return <button className="default-button" id={i} key={i} style={prop.style} onClick={() => prop.callback?.()}>
        {prop.title}
    </button>
};