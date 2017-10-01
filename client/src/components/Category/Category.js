import React from "react";
import CategorySettings from '../CategorySettings';
import AddItem from '../AddItem';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Setting from 'material-ui/svg-icons/action/settings';
import Search from 'material-ui/svg-icons/action/search';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Add from 'material-ui/svg-icons/content/add';

const styles = {
    categoryCard: {
        marginBottom: "20px"
    }
}

const Category = props => {

    return (
        <Card style={styles.categoryCard}>
            <CardTitle title={props.categoryData.name} />
            <Tabs>
                <Tab icon={<ViewList />}>
                    <CardText expandable={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Tab>
                <Tab icon={<Add />} >
                    <CardText expandable={false}>
                        <AddItem
                            shindigId={props.shindigId}
                            categoryData={props.categoryData}
                            onCategoriesChange={props.onCategoriesChange}
                        />
                    </CardText>
                </Tab>
                <Tab display={props.categoryData.yelpEnabled} icon={<Search />} >
                    <CardText expandable={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Tab>
                <Tab icon={<Setting />} >
                    <CardText expandable={false}>
                        <CategorySettings
                            shindigId={props.shindigId}
                            categoryData={props.categoryData}
                            onCategoriesChange={props.onCategoriesChange}
                        />
                    </CardText>
                </Tab>

            </Tabs>

        </Card>
    );

}

export default Category;