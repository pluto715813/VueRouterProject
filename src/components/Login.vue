<template>
    <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="account">
                <el-input v-model="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-bind:disabled="loginstyle" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </el-main>

</template>

<script>
  export default {
    data() {
      return {
        loginstyle:false,
        ruleForm: {
          account: '',
          password: '',
        },
        rules: {
          account: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 10, max: 16, message: '密码长度在 10 到 16 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.loginstyle = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
              localStorage.setItem('accessToken', 'pluto' )//设置
              this.$message.success('success');
              this.timer = setTimeout(()=>{ //设置延迟执行
                this.$router.push('/download');
              },1000);
          } else {
              this.$message.error('error');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>