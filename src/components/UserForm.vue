<template>
<button id="submit" type="button" name="button" v-on:click="emitToParent">Submit</button>
</template>
<script>
export default {
      props: {
        firstName: String,
        lastName: String,
        emailId:String,
        phoneNo:String
      },
      setup(prop, {emit}) {
        function emitToParent() {

            emit('clicked', {name:prop.firstName+prop.lastName,email:prop.emailId,phoneno:prop.phoneNo})
        }
        return {emitToParent,}
      }    
}
</script>