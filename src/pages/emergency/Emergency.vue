<template>
  <div class="content">
    <el-container>
      <el-header>
        <div class="left">
          <span>急诊医学科晨交班</span>
        </div>
        <div class="right">
          <el-button type="primary" @click="EmergencyFormVisible = true">出车</el-button>
          <el-button type="primary" style="margin-left: 20px;margin-right: 20px" @click="dialogFormVisible = true">高压氧科</el-button>
          <span>日期：{{selectDate}}</span>
        </div>
      </el-header>
      
      <el-main>
        <el-row :gutter="30">
          <el-col :span="6">
            <el-card v-on:click.native="weekEmergency">
              <div class="card-content">
                <img src="../../assets/emergency/person.svg" alt="" width="64px">
                <span>
                  <span>24小时就诊人数</span>
                  <span style="display: block;margin-top: 10px;font-weight: bold;">{{EmergencyData.total}}</span>
                </span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card v-on:click.native="weekInject">
              <div class="card-content">
                <img src="../../assets/emergency/transfusion.svg" alt="" width="64px">
                <span>
                  <span>24小时输液清创人数</span>
                  <span style="display: block;margin-top: 10px;font-weight: bold;">{{EmergencyData.total}}</span>
                </span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card v-on:click.native="weekHospitalCar">
              <div class="card-content">
                <img src="../../assets/emergency/ambulance.svg" alt="" width="64px">
                <span>
                  <span>24小时院前出车人次</span>
                  <span style="display: block;margin-top: 10px;font-weight: bold;">{{EmergencyData.total}}</span>
                </span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card v-on:click.native="weekEmergencyWard">
              <div class="card-content">
                <img src="../../assets/emergency/bed.svg" alt="" width="64px">
                <span>
                  <span>急诊综合病区</span>
                  <span style="display: block;margin-top: 10px;font-weight: bold;">{{EmergencyData.total}}</span>
                </span>
              </div>
            </el-card>
          </el-col>
        </el-row>
        
        <el-card style="margin-top: 30px;min-height: 400px">
          <div id="canvas" style="min-height: 400px;width: 100%">
          
          </div>
        </el-card>
        
        <el-row :gutter="30" style="margin-top: 30px">
          <el-col :span="6">
            <el-card>
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="3" class="is-primary">24小时就诊人数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="2">急诊内科</td>
                  <td>{{EmergencyData.geriatrics}}</td>
                </tr>
                <tr>
                  <td rowspan="3" style="vertical-align: middle">急诊外科</td>
                  <td>总就诊人数</td>
                  <td>{{EmergencyData.surgery}}</td>
                </tr>
                <tr>
                  <td>其中急诊人数</td>
                  <td>{{EmergencyData.surgeryTotal}}</td>
                </tr>
                <tr>
                  <td>其中狂犬疫苗数</td>
                  <td>{{EmergencyData.rabiesVaccine}}</td>
                </tr>
                <tr>
                  <td colspan="2">急诊妇产</td>
                  <td>{{EmergencyData.maternity}}</td>
                </tr>
                <tr>
                  <td colspan="2">急诊五官</td>
                  <td>{{EmergencyData.otolaryngology}}</td>
                </tr>
                <tr>
                  <td colspan="2">急诊抢救室</td>
                  <td>{{EmergencyData.salvage}}</td>
                </tr>
                <tr>
                  <td colspan="2">合计</td>
                  <td>{{EmergencyData.total}}</td>
                </tr>
                <tr>
                  <td colspan="3" style="text-align: left;font-weight: bold" class="is-primary">其中</td>
                </tr>
                <tr>
                  <td colspan="2">Ⅰ级患者</td>
                  <td>{{EmergencyData.onePatient}}</td>
                </tr>
                <tr>
                  <td colspan="2">Ⅱ级患者</td>
                  <td>{{EmergencyData.twoPatient}}</td>
                </tr>
                <tr>
                  <td colspan="2">Ⅲ级患者</td>
                  <td>{{EmergencyData.threePatient}}</td>
                </tr>
                <tr>
                  <td colspan="2">Ⅳ级患者</td>
                  <td>{{EmergencyData.fourPatient}}</td>
                </tr>
                <tr>
                  <td colspan="2">胸痛病人</td>
                  <td>{{EmergencyData.thoracalgia}}</td>
                </tr>
                <tr>
                  <td colspan="2">胸痛住院数</td>
                  <td>{{EmergencyData.inPatient}}</td>
                </tr>
                </tbody>
              </table>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="2" class="is-primary">24小时输液清创人数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>肌肉注射量</td>
                  <td>{{InjectData.debridement}}</td>
                </tr>
                <tr>
                  <td>门诊静推量</td>
                  <td>{{InjectData.intravenous}}</td>
                </tr>
                <tr>
                  <td>门诊输液量</td>
                  <td>{{InjectData.transfusion}}</td>
                </tr>
                <tr>
                  <td>急诊输液量</td>
                  <td>{{InjectData.emergencyInfusion}}</td>
                </tr>
                <tr>
                  <td>总输液量</td>
                  <td>{{InjectData.totalInfusion}}</td>
                </tr>
                <tr>
                  <td>清创</td>
                  <td>{{InjectData.debridement}}</td>
                </tr>
                <tr>
                  <td>入院人数</td>
                  <td>{{InjectData.inpatient}}</td>
                </tr>
                </tbody>
              </table>
              
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="2" class="is-primary">24小时院前出车人次</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>本部派车</td>
                  <td>{{HospitalCarData.item1}}</td>
                </tr>
                <tr>
                  <td>23区派车</td>
                  <td>{{HospitalCarData.item2}}</td>
                </tr>
                <tr>
                  <td>病人直呼</td>
                  <td>{{HospitalCarData.item3}}</td>
                </tr>
                <tr>
                  <td>接病人</td>
                  <td>{{HospitalCarData.item4}}</td>
                </tr>
                <tr>
                  <td>送病人</td>
                  <td>{{HospitalCarData.item5}}</td>
                </tr>
                <tr>
                  <td>保健</td>
                  <td>{{HospitalCarData.item6}}</td>
                </tr>
                <tr>
                  <td>长途出车</td>
                  <td>{{HospitalCarData.item7}}</td>
                </tr>
                <tr>
                  <td>出车总数</td>
                  <td>{{HospitalCarData.item8}}</td>
                </tr>
                </tbody>
              </table>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <!--急诊综合病区 EmergencyWardData-->
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="2" class="is-primary">急诊综合病区</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>病区总人数</td>
                  <td>{{EmergencyWardData.item1}}</td>
                </tr>
                <tr>
                  <td>入院人数</td>
                  <td>{{EmergencyWardData.item2}}</td>
                </tr>
                <tr>
                  <td>出院人数</td>
                  <td>{{EmergencyWardData.item3}}</td>
                </tr>
                </tbody>
              </table>
              <!--EICUData-->
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="2" class="is-primary">EICU</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>病区总人数</td>
                  <td>{{EICUData.item1}}</td>
                </tr>
                <tr>
                  <td>入院人数</td>
                  <td>{{EICUData.item2}}</td>
                </tr>
                <tr>
                  <td>出院人数</td>
                  <td>{{EICUData.item3}}</td>
                </tr>
                </tbody>
              </table>
              <!---->
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="2" class="is-primary">高压氧科</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>高压氧舱数</td>
                  <td>{{OxygenData.item1}}</td>
                </tr>
                <tr>
                  <td>高压氧治疗</td>
                  <td>{{OxygenData.item2}}</td>
                </tr>
                <tr>
                  <td>高压氧会诊</td>
                  <td>{{OxygenData.item3}}</td>
                </tr>
                <tr>
                  <td>高压氧门诊</td>
                  <td>{{OxygenData.item4}}</td>
                </tr>
                </tbody>
              </table>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <!--当日下夜就诊人数-->
              <table class="table is-fullwidth">
                <thead>
                <tr>
                  <th colspan="2" class="is-primary">当日下夜就诊人数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>急诊内科</td>
                  <td>{{EmergencyPatientData.item1}}</td>
                </tr>
                <tr>
                  <td>急诊外科</td>
                  <td>{{EmergencyPatientData.item2}}</td>
                </tr>
                <tr>
                  <td>急诊妇产</td>
                  <td>{{EmergencyPatientData.item3}}</td>
                </tr>
                <tr>
                  <td>急诊五官</td>
                  <td>{{EmergencyPatientData.item4}}</td>
                </tr>
                <tr>
                  <td>急诊抢救室</td>
                  <td>{{EmergencyPatientData.item5}}</td>
                </tr>
                <tr>
                  <td>总就诊人数</td>
                  <td>{{EmergencyPatientData.item6}}</td>
                </tr>
                <tr>
                  <td>急诊输液量</td>
                  <td>{{EmergencyPatientData.item7}}</td>
                </tr>
                <tr>
                  <td>清创人数</td>
                  <td>{{EmergencyPatientData.item8}}</td>
                </tr>
                <tr>
                  <td>漏收费</td>
                  <td>{{EmergencyPatientData.item9}}</td>
                </tr>
                <tr>
                  <td>出车</td>
                  <td>{{EmergencyPatientData.item10}}</td>
                </tr>
                </tbody>
              </table>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    
    <el-dialog title="高压氧科" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="高压氧舱数" :label-width="formLabelWidth">
          <el-input-number v-model="form.item1" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="高压氧治疗" :label-width="formLabelWidth">
          <el-input-number v-model="form.item2" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="高压氧会诊" :label-width="formLabelWidth">
          <el-input-number v-model="form.item3" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="高压氧门诊" :label-width="formLabelWidth">
          <el-input-number v-model="form.item4" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="putOxygenData">确 定</el-button>
      </div>
    </el-dialog>
    
    
    <el-dialog title="24小时院前出车人次" :visible.sync="EmergencyFormVisible">
      <el-form :model="EmergencyForm">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker type="date" placeholder="选择日期" v-model="EmergencyForm.date" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="本部派车" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item1" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="23区派车" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item2" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="病人直呼" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item3" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="接病人" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item4" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="送病人" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item5" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="保健" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item6" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="长途出车" :label-width="formLabelWidth">
          <el-input-number v-model="EmergencyForm.item7" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="EmergencyFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="putEmergencyData">确 定</el-button>
      </div>
    </el-dialog>
  
  </div>
</template>

<script>
  import {get, post} from "../../api/Http";
  
  export default {
    name: "Emergency",
    data() {
      return {
        dialogFormVisible: false,
        EmergencyFormVisible: false,
        formLabelWidth: '120px',
        selectDate: "2019-10-17",
        EmergencyData: {
          "geriatrics": 140,
          "surgeryTotal": 121,
          "surgery": 183,
          "rabiesVaccine": 121,
          "maternity": 121,
          "otolaryngology": 121,
          "salvage": 121,
          "total": 10,
          "onePatient": 121,
          "twoPatient": 121,
          "threePatient": 121,
          "fourPatient": 121,
          "thoracalgia": 121,
          "inPatient": 121
        },
        
        optionData: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        },
        
        EICUData: {
          "item1": 121,
          "item2": 121,
          "item3": 121
        },
        
        /*当日下夜就诊人数*/
        EmergencyPatientData: {
          "item1": 121,
          "item2": 121,
          "item3": 121,
          "item4": 121,
          "item5": 121,
          "item6": 121,
          "item7": 121,
          "item8": 121,
          "item9": 121,
          "item10": 121
        },
        
        InjectData: {
          "intramuscular": 121,
          "intravenous": 121,
          "transfusion": 121,
          "emergencyInfusion": 121,
          "totalInfusion": 121,
          "debridement": 121,
          "inpatient": 121
        },
        
        OxygenData: {
          "item1": 121,
          "item2": 121,
          "item3": 121,
          "item4": 121,
        },
        
        EmergencyWardData: {
          "item1": 121,
          "item2": 121,
          "item3": 121
        },
        
        HospitalCarData: {
          "item1": 121,
          "item2": 121,
          "item3": 121,
          "item4": 121,
          "item5": 121,
          "item6": 121,
          "item7": 121,
          "item8": 121,
        },
        
        weekEmergencyData: {},
        
        weekInjectData: {},
        
        weekHospitalCarData: {},
        
        weekEmergencyWardData: {},
        
        form: {
          date: "",
          item1: "",
          item2: "",
          item3: "",
          item4: ""
        },
        
        EmergencyForm: {
          date: "",
          item1: "",
          item2: "",
          item3: "",
          item4: "",
          item5: "",
          item6: "",
          item7: ""
        }
      }
    },
    mounted() {
      this.render(this.optionData);
      this.getEICU(this.selectDate);
      this.getEmergencyData(this.selectDate);
      this.getEmergencyPatient(this.selectDate);
      this.getInjectData(this.selectDate);
      this.getHospitalCar(this.selectDate);
      this.getOxygenData(this.selectDate);
      this.getEmergencyWard(this.selectDate);
    },
    
    methods: {
      render(option) {
        let canvas = document.getElementById("canvas");
        let echarts = this.$echarts.init(canvas);
        echarts.setOption(option);
      },
      
      /*获取EICU数据*/
      getEICU(date) {
        get("/emergency/EICUData", {date: date}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.EICUData = value;
          }
        }).catch(err => {
        
        })
      },
      
      /*获取急诊数据*/
      getEmergencyData(date) {
        get("/emergency/EmergencyData", {date: date}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.EmergencyData = value;
          }
        }).catch(err => {
        
        })
      },
      
      /*获取急诊病人数据*/
      getEmergencyPatient(date) {
        get("/emergency/EmergencyPatientData", {date: date}).then(value => {
          console.log(value);
          if (!this.$lodash.isEmpty(value)) {
            this.EmergencyPatientData = value;
          }
        }).catch(err => {
        
        })
      },
      
      /*获取点滴注射数据*/
      getInjectData(date) {
        get("/emergency/InjectData", {date: date}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.InjectData = value;
          }
        }).catch(err => {
        
        })
      },
      
      /*获取出车数据*/
      getHospitalCar(date) {
        get("/HospitalCar/date", {date: date}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.HospitalCarData = value;
          }
        }).catch(err => {
          console.log(err);
        })
      },
      
      /*获取高压氧数据*/
      getOxygenData(date) {
        get("/Oxygen/date", {date: date}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.OxygenData = value;
          }
        }).catch(err => {
        
        })
      },
      
      /*获取病房人数数据*/
      getEmergencyWard(date) {
        get("/emergency/EmergencyWardData", {date: date}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.EmergencyWardData = value;
          }
        }).catch(err => {
        
        })
      },
      
      /*获取一周急诊数据*/
      weekEmergency() {
        get("/emergency/weekEmergency", {date: this.selectDate}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.weekEmergencyData = value
          }
        }).catch(err => {
        
        })
      },
      
      /*获取一周点滴注射数据*/
      weekInject() {
        get("/emergency/weekInject", {date: this.selectDate}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.weekInjectData = value
          }
        }).catch(err => {
        
        })
      },
      
      /*获取一周出车数据*/
      weekHospitalCar() {
        get("/emergency/weekHospitalCar", {date: this.selectDate}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.weekHospitalCarData = value
          }
        }).catch(err => {
        
        })
      },
      
      /*获取一周急诊综合病区数据*/
      weekEmergencyWard() {
        get("/emergency/weekEmergencyWard", {date: this.selectDate}).then(value => {
          if (!this.$lodash.isEmpty(value)) {
            this.weekEmergencyWardData = value
          }
        }).catch(err => {
        
        })
      },
      
      /*上传高压氧数据*/
      putOxygenData() {
        console.log(this.form);
        post("/Oxygen/save", this.form).then(value => {
          if (value == 1) {
            this.dialogFormVisible = false;
            this.$message('保存成功！');
          } else {
            this.$message("保存失败");
          }
        }).catch(err => {
          this.$message("保存失败");
        })
      },
      
      /*上传24小时院前出车人次*/
      putEmergencyData() {
        post("/HospitalCar/save", this.EmergencyForm).then(value => {
          console.log(value);
          if (value == 1) {
            this.EmergencyFormVisible = false;
            this.$message('保存成功！');
          } else {
            this.$message("保存失败");
          }
        }).catch(err => {
          this.$message("保存失败");
        })
      }
      
      
    },
    
    
  }
</script>

<style scoped>
  @import "../../assets/table.css";
  
  .content {
    height: 100%;
    background-color: #EFF1F4;
  }
  
  .el-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: #606266;
    background-color: #FFFFFF;
  }
  
  .el-container {
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    overflow-y: auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  
  .el-card {
    min-height: 108px;
  }
  
  .card-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
  }

</style>
