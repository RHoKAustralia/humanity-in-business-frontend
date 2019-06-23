<template>
  <div id="sdg-container">
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg1" v-model="checkedSDG" value="1"/>
        <label class="sdglabel" for="sdg1">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-01.png"    alt="No Poverty" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg2" v-model="checkedSDG" value="2" />
        <label class="sdglabel" for="sdg2">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-02.png"    alt="Zero Hunger" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg3" v-model="checkedSDG" value="3" />
        <label class="sdglabel" for="sdg3">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-03.png"    alt="Good Health And Well-Being" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg4" v-model="checkedSDG" value="4" />
        <label class="sdglabel" for="sdg4">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-04.png"    alt="Quality Education" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg5" v-model="checkedSDG" value="5" />
        <label class="sdglabel" for="sdg5">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-05.png"    alt="Gender Equality" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg6" v-model="checkedSDG" value="6" />
        <label class="sdglabel" for="sdg6">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-06.png"    alt="Clean Water and Sanitation" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg7" v-model="checkedSDG" value="7" />
        <label class="sdglabel" for="sdg7">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-07.png"    alt="Affordable Clean Energy" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg8" v-model="checkedSDG" value="8"/>
        <label class="sdglabel" for="sdg8">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-08.png"    alt="Decent Work and Economic Growth" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg9" v-model="checkedSDG" value="9" />
        <label class="sdglabel" for="sdg9">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-09.png"    alt="Industry, Innovation and Infrastructure" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg10" v-model="checkedSDG" value="10"/>
        <label class="sdglabel" for="sdg10">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-10.png"    alt="Reduced Inequality" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg11" v-model="checkedSDG" value="11"/>
        <label class="sdglabel" for="sdg11">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-11.png"    alt="Sustainable Cities and Communities" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg12" v-model="checkedSDG" value="12"/>
        <label class="sdglabel" for="sdg12">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-12.png"    alt="Responsible Consumption and Production" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg13" v-model="checkedSDG" value="13"/>
        <label class="sdglabel" for="sdg13">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-13.png"    alt="Climate Action" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg14" v-model="checkedSDG" value="14"/>
        <label class="sdglabel" for="sdg14">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-14.png"    alt="Life Below Water" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg15" v-model="checkedSDG" value="15"/>
        <label class="sdglabel" for="sdg15">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-15.png"    alt="Life On Land" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg16" v-model="checkedSDG" value="16"/>
        <label class="sdglabel" for="sdg16">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-16.png"    alt="Peace, Justice and Strong Institutions" />
        </label>
      </div>
    </div>
    <div class="sdg">
      <div class="sdg-checkbox">
        <input type="checkbox" id="sdg17" v-model="checkedSDG" value="17"/>
        <label class="sdglabel" for="sdg17">
          <img src="https://www.undp.org/content/dam/undp/sdg/tiles/sdg-en-17.png"    alt="Partnerships for the Goals" />
        </label>
      </div>
    </div>
    <div
      class="d-flex align--center justify--space-between down-container">
      <button class="btn btn-primary" type="button" v-on:click="sdgSubmit">
        Done
      </button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'sdg',
  data () {
    return { checkedSDG: [] }
  },
  methods: {
    sdgSubmit: function (event) {
      console.log(this.checkedSDG)
    }
  }
}
</script>

<style lang="scss">
  #sdg-container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .sdg{

    width: 30%;
    margin: 1%;

    .sdg-checkbox{
      display: inline;

      .sdglabel{
        background-color: red;
      }

      img{
        width: 90%;
        height: 90%;
        margin: 5% 5%;
      }
    }

    .sdg-checkbox input[type=checkbox]{
      display: none;
    }

    .sdg-checkbox input[type=checkbox]:checked + .sdglabel{
      background-color: green;
    }

    p{
      width: 100%;

    }

    .sdg-text{
      width: 100%;
    }
  }

</style>
