'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_Off = 32;
  this.temperature = 20;
  this.powerSavingMode = true;
}
//object constructor = Thermostat and giving it a property of temperature--then  used the prototype keyword to bind the getCurrentTemperature function to our Thermostat
Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};
Thermostat.prototype.up = function(){
  if(this.isMaximumTemperature()) {
    return;
  }
   this.temperature +=1;
};

Thermostat.prototype.down = function(){
 if( this.isMinimumTemperature()){
   return;
 }
 this.temperature -=1;
};
Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};
Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};
Thermostat.prototype.switchPowerSavingModeOff= function(){
     this.powerSavingMode = false;
};
Thermostat.prototype.switchPowerSavingModeOn = function(){
 this.powerSavingMode = true;
};
Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn() === false){
    return this.temperature === this.MAX_LIMIT_PSM_Off;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};