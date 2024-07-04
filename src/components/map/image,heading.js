export const Heading1=()=>{
    return(<h1>men's clothing</h1>
    )
}
export const Heading2=()=>{
    return(<h2>men's clothing</h2>
    )
}
export const Heading3=()=>{
    return(<h3>men's clothing</h3>
    )
}
export const Heading4=()=>{
    return(<h4>men's clothing</h4>
    )
}
export const Heading5=()=>{
    return(<h5>men's clothing</h5>
    )
}

export const Heading6=(prop)=>{//used for children prop
    const{title}=prop;
    return(<h6>{title}</h6>
    )
}

export const ImageComponent=(prop)=>{
    console.log(prop,"prop");
    return<img src = {prop.source} width={100} alt="shirt"/>
}