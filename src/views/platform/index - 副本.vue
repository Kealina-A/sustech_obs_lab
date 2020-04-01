<template>
  <div class="platform">
    <figure>
      <figcaption>
        <h1>设备有偿共享平台</h1><br>
        <p>南方科技大学OBS实验室的一项重要职能是探讨我国科研仪器设备共享的机制。</p>
      </figcaption>
      <img src="../../../static/img/project/head.jpg" width="100%" height="300px">
    </figure>

    <div class="input-style">
      <el-form ref = "form" :model="form"  :rules="rules" label-position="left" style="margin-top: 60px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入您的姓名"
                style = "width:150px"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位" prop="unit">
              <el-input
                v-model="form.unit"
                placeholder="请输入您的单位"
                style = "width:150px"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="称谓">
              <el-input
                v-model="form.appellation"
                placeholder="请输入您的称谓"
                style = "width:150px"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="电话" prop="phone">
              <el-input
                v-model="form.phone"
                placeholder="请输入您的电话"
                style = "width:150px"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="地址" prop="address">
              <el-input
                v-model="form.address"
                placeholder="请输入您的地址"
                style = "width:150px"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱">
              <el-input
                v-model="form.email"
                placeholder="请输入您的邮箱"
                style = "width:150px"
                clearable>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="设备" prop="device_name">
              <el-select v-model="form.device_name" placeholder="请选择您要使用的设备">
                <el-option
                  v-for="item in device_name"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="海域" prop="work_address">
              <el-select v-model="form.work_address" placeholder="请选择您投放设备的海域">
                <el-option
                  v-for="item in work_area"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工作水深" prop="deep">
              <el-select v-model="form.deep" placeholder="请选择设备工作最大深度">
                <el-option
                  v-for="item in work_deep"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="使用时间段" required>
            <el-col :span="6">
              <el-form-item prop="start_time">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.start_time" style="width: 100%;"
                                :picker-options="pickerOptions0"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="6">
              <el-form-item prop="end_time">
                <el-date-picker placeholder="选择时间" v-model="form.end_time" style="width: 100%;"
                                :picker-options="pickerOptions1"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="其他备注">
            <el-input
              type="textarea"
              v-model="form.desc"
              placeholder="请输入您的其他需求"
              style = "width:810px"
              clearable>
            </el-input>
          </el-form-item>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">提交申请</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'platform',
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.form.email = '';
        this.form.appellation = '';
        this.form.desc = '';
      }
    },
    created(){
      this.$emit('headFix', ['fixed',false]);
    },
    data(){
      var isPhoneNumber= (rule, value, callback) => {
        if (!value) {
          return new Error("请输入电话号码");
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
          const reg2 = /^(\d{3,4}-)?\d{7,8}$/;
          const isTel = reg2.test(value);
          const isPhone = reg.test(value);
          value = Number(value); //转换为数字
          if (typeof value === "number" && !isNaN(value)) {//判断是否为数字
            value = value.toString(); //转换成字符串
            if (value.length < 0 || value.length > 12 || !isPhone) { //判断是否为11位手机号
                callback(new Error("请输入正确的手机号或者座机号"));
            } else {
              callback();
            }
          } else {
            if (value.length < 10 || value.length > 13 || !isTel ) {//判断传真字符范围是在10到13
              callback(new Error("请输入正确的手机号或者座机号"));
            } else {
              callback();
            }
          }
        }
      };
      return {
        pickerOptions0: {
          disabledDate: (time) => {
            if(this.form.end_time == '' || this.form.end_time == null){
              return time.getTime() < Date.now() - 8.64e7;
            }else{
              return time.getTime() > this.form.end_time || time.getTime() < Date.now() - 8.64e7;
            }
          }
        },
        pickerOptions1: {
          disabledDate: (time) => {
            if(this.form.start_time != "" && this.form.start_time != null){
              return time.getTime() < this.form.start_time;
            }else{
              return true;
            }
          }
        },
        form:{
          name:'',
          unit:'',
          appellation:'',
          phone:'',
          address:'',
          email:'',
          device_name:'',
          work_address:'',
          deep:'',
          start_time:'',
          end_time:'',
          desc:'',
        },
        rules:{
          name:[
            {required: true, message:'请输入姓名', trigger: 'blur'},
          ],
          unit:[
            {required: true, message:'请输入所在单位', trigger: 'blur'},
          ],
          phone:[
            {required: true, message:'请输入电话号码', trigger: 'blur'},
            { validator: isPhoneNumber, trigger: "change" },
            { validator: isPhoneNumber, trigger: "blur" },
          ],
          address:[
            {required: true, message:'请输入所在地址', trigger: 'blur'},
          ],
          device_name:[
            {required: true, message:'请选择设备', trigger: 'change'},
          ],
          work_address:[
            {required: true, message:'请选择使用海域', trigger: 'change'},
          ],
          deep:[
            {required: true, message:'请选择最大工作水深', trigger: 'change'},
          ],
          start_time:[
            {required: true, message:'请选择起始时间', trigger: 'change'},
          ],
          end_time:[
            {required: true, message:'请选择结束时间', trigger: 'change'},
          ],
        },
        device_name: [{
          value: '选项1',
          label: '磐鲲OBS (10万/年)'
        }, {
          value: '选项2',
          label: '磐龟OBS (2万/月)'
        }, {
          value: '选项3',
          label: '八爪鱼数采 (1.5万/台)'
        }, {
          value: '选项4',
          label: '海萤信标 (1万/台)'
        }, {
          value: '选项5',
          label: '海鹰OBS捕获器 (10万/套)'
        }],
        work_area: [{
          value: '选项1',
          label: '南海'
        }, {
          value: '选项2',
          label: '西太平洋'
        }, {
          value: '选项3',
          label: '西南印度洋'
        }, {
          value: '选项4',
          label: '大西洋'
        }, {
          value: '选项5',
          label: '其他海区'
        }],
        work_deep: [{
          value: '选项1',
          label: '<1000米'
        }, {
          value: '选项2',
          label: '<2000米'
        }, {
          value: '选项3',
          label: '<3000米'
        }, {
          value: '选项4',
          label: '<4000米'
        }, {
          value: '选项5',
          label: '<6000米'
        }, {
          value: '选项6',
          label: '>6000米'
        }],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .platform {
//    background-color: #0086b3;
    figure {
      figcaption {
        color: #ffffff;
        text-align: left;
        position: absolute;
        left: 6%;
        top: 10%;
        h1 {
          font-size: 2.5rem;
        }
      }
    }
    .input-style{
      border:1px solid #0086b3;
      margin:0px auto;
      width: 900px;
      height: 450px;
    }
  }

</style>
