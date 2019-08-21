

/**
 * Controllers for the list component
 */

/**
 * Get data source from API or local arrays
 * @param dataSource  
 */
function GetData(dataSource = null){
    //If no data source is given
    try {
        let data = localStorage.getItem(dataSource);
        if(data.length > 0){
            return {
                data: data,
                lenth: data.length
            }
        }

        throw new Error('No Data found')
    } catch (error) {
        
    }
}

 
 /**
  *
  * @description SearchData for Api data from Api Source
  * @param {object} vm Vue instance 
  * @param {string} searchInput The data inserted in the search field 
  * @returns {array} data
  */

  export function SearchData(vm, searchInput){
    
    //Assign data to

    }

  /**
   * @description Reload API data fetch
   * @param {object} vm Vue Instance
   */
  export function ReloadSearch(vm)
  {

  }

  /**
   * @description Reload API data fetch
   * @param {object} vm Vue Instance
   */
  export function LoadMoreData(vm)
  {
      
  }
