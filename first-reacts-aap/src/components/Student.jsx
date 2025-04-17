import Child from "./Child"

const Student = ({name, age, city}) => {
    return (
        <>
            <div>Student</div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <Child city={city} pin={"12234"}/>
        </>
    )
}

export default Student