<template>
  <section class="container-fluid">

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Pivot "PivotTable.js"
        </div>
        <div class="panel-body">
          <div id="pivottable-test"></div>
        </div>
      </article>
    </div>

  </section>
</template>

<script>

export default {
  name: 'pivot',
  data () {
    return {

    }
  },
  mounted() {
    $("#pivottable-test").pivotUI(
        [
            {color: "blue", shape: "circle"},
            {color: "red", shape: "triangle"}
        ],
        {
            rows: ["color"],
            cols: ["shape"]
        },
        false,
        "fr"
    );
  }
}
</script>

<style scoped>

</style>
