<template>
  <router-view />
</template>

<style>
body,
html,
h1 {
  font-family: Arial;
  margin: 0px;
  padding: 0px;
}

h1 {
  font-size: 14px;
    margin-bottom: 30px;
}

.page-wrapper {
  width: 80%;
  margin: 30px auto 0px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.form-control {
  width: 33%;
  display: flex;
  flex-direction: column;
}

.input-feild {
  width: 250px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: 1px solid #000;
    height: 15px;
    padding: 5px;
}

select.input-feild{
  height: 30px;
    width: 260px;
}

.form-control label {
  font-weight: bold;
    font-size: 12px;
    margin-bottom: 3px;
}

.checkbox-control {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}

.checkbox-control .input-feild {
  width: initial;
}

.checkbox-control label {margin-right: 15px;}

.cta-right {
  width: 100%;
  text-align: right;
  margin-top: 20px;
}

.cta {
  background-color: #b02c6b;
    border: 1px solid #b02c6b;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    width: 90px;
    display: inline-block;
    text-align: center;
    padding: 8px 0px;
  color: #fff;
  cursor: pointer;
}

.cta-plane {
  color: #b02c6b;
  background-color: transparent;
  border: 0px;
  font-size: 14px;
  font-weight: bold;
    cursor: pointer;
}

.marg-t0 {margin-top: 0px;}
</style>

