<template>
  <section class="container-fluid">

    <div class="col-md-6">
      <article class="panel panel-primary">
        <div class="panel-heading">
          Pivot <a href="https://pivottable.js.org/examples/">"PivotTable.js"</a>
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
a {
  color: white;
}
</style>
