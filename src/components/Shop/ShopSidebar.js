import React, { useReducer } from "react";

const ShopSidebar = ({filters, selectedFilters, setSelectedFilters, dispatchCourses}) => {
    const initDropdownState = filters.map(()=>{
        return(
            {
                isActive: true
            }
        )
    })
    const dropdownReducer = (state, idx) =>{
        const newState = state.map((item, index)=>{
            if(index == idx){
                let newItem = item;
                newItem.isActive = !newItem.isActive;
                return newItem;
            }else{
                return item;
            }
        })
        return newState
    }
    const [state, dispatch] = useReducer(dropdownReducer, initDropdownState)
    const handleFilterChange = (e,tag) =>{
        let newSelectedList = selectedFilters;
        if(e.target.checked){
            newSelectedList.push(tag);
        }else{
            const index = newSelectedList.indexOf(tag);
            newSelectedList.splice(index, 1);
        }
        setSelectedFilters(newSelectedList);
        dispatchCourses(newSelectedList)
    }

    return (
        <div>
            {
                filters && filters.map((filter, idx) =>{
                    return(
                        <div className="course-sidebar-widget mb-20" key={`filter-${idx}`}>
                            <div className={`course-sidebar-info ${state[idx].isActive ? "danger" : "content-hidden"}`}>
                                <h3 className="drop-btn" onClick={()=> dispatch(idx)}>{filter.filterName}</h3>
                                <ul>
                                    {
                                        filter.facets.map((facet, index)=>{
                                            return(
                                                <li key={index}>
                                                    <div className="course-sidebar-list">
                                                        <input className="edu-check-box" type="checkbox" id={facet.tag} onChange={(e)=>handleFilterChange(e,facet.tag)}/>
                                                        <label className="edu-check-label" htmlFor={facet.tag}>{facet.facetName}</label>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
    );
};

export default ShopSidebar;