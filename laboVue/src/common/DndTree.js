var d3 = require("d3")

export default (element, treeData) => {

  if(treeData == null || treeData.length === 0) {
    return
  }

  d3.select(element).append("svg")

}
