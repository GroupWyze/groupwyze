import React from "react";
import Category from "../Category";
import AddCategory from "../AddCategory";

const Categories = props => {

    const categoryItems = props.categories.map(cat => {
        return (
            <div key={cat.name} className="col l6">
                <Category
                    shindigId={props.shindigId}
                    categoryData={cat}
                    onCategoriesChange={props.onCategoriesChange}
                    location={props.location}
                />
            </div>
        );
    });

    return (
        <div>
            <div className="row" style={{marginTop: "10px"}}>
                {categoryItems}
            </div>
            <AddCategory shindigId={props.shindigId} onCategoriesChange={props.onCategoriesChange} />
        </div>
    );
}

export default Categories;