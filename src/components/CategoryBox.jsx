export default function CategoryBox(props){
    const categories = props.list
    return(
        <div className="product-category-box">
            {categories.map((item) => {
                <div>{item}</div>
            })}
        </div>
    )
}