<template>
  <div>
    <div class="container text-secondary">

      <!--------------------------------- header-------------------- -->
      <div class="container bg-secondary text-white">

        <!------------------------ShowName---------------------------------------->
        <div v-if='nameFlag'>
                <h3   
                @click='nameFlag=!nameFlag'>
                {{name}}
                </h3>
            </div>
        <!--------------------------------/////////////shoeName-------------------------------->

        <!-----------------------------nameInput-------------------------->
          <div v-if="!nameFlag">
            
                
                <input 
                class="bg-transparent text-center" 
                type="text" 
                @keyup.enter='nameFlag=!nameFlag'
                placeholder="name" 
                v-model="name" 
                data-aos="fade-up"
                required>
          </div>

          <!-------------------/////////////nameInput----------------------->

          <!-----------------------------emial------------------------------>

          <div v-if="emailFlag">
            <p @click='emailFlag=!emailFlag'><strong>Email:</strong>{{email}}</p>
          </div>

          <div v-if="!emailFlag">
                
                <input 
                class=" bg-transparent" 
                type="email" 
                @keyup.enter='emailFlag=!emailFlag'
                placeholder="email" 
                v-model="email" 
                data-aos="fade-up"
                required>
          </div>

          <!------------------------email-end----------------------------------->

          <!---------------------------contact-------------------------------->


          <div v-if="contactFlag">
            <p @click='contactFlag=!contactFlag'><strong>contact:</strong>{{contact}}</p>
          </div>

          <div v-if="!contactFlag">
                
                <input 
                class="container bg-transparent" 
                type="text" 
                @keyup.enter='contactFlag=!contactFlag'
                placeholder="contact" 
                v-model.number="contact" 
                minlength="10"
                maxlength="10"
                data-aos="fade-up"
                required>
          </div>
          <!-------------------------//contact-end---------------------------------->




          <!----------------------------address------------------------------->

          <div v-if="addressFlag">
            <strong>Address:</strong>
            <p @click='addressFlag=!addressFlag' v-html="address">{{address}}</p>
          </div>

          <div v-if="!addressFlag">
                
                <textarea
                class="bg-transparent"  
                @keyup.enter='addressFlag=!addressFlag'
                placeholder="Address" 
                v-model="address" 
                data-aos="fade-up"

                required>
                </textarea>
          </div>
          <!-----------------------------address-end------------------------------>
      </div>
      <!-- -------------------------------header-end---------------------------- -->


      <!-- ---------------------------bio----------------------------------------- -->
          <div v-if="bioFlag">
            <p @click='bioFlag=!bioFlag' v-html="bio">{{bio}}</p>
          </div>

           <textarea 
                v-if="!bioFlag"
                class="container"
                @keyup.enter='bioFlag=!bioFlag'
                placeholder="bio" 
                v-model="bio" 
                data-aos="fade-up"

                required>
           </textarea>
      <!-- --------------------bio-end---------------------------------------- -->


      <!-- --------------------skill-------------------------------------------- -->
      
      <strong class="text-black" @click="skillFlag=!skillFlag">Skills</strong>
      <div v-if='!skillFlag'>
        <p>{{temp_a}}:{{temp_b}}</p>
      <input type="text" placeholder="skill" v-model="temp_a" @keyup.enter="skillFlag=!skillFlag">
      <b-form-rating v-model="temp_b" inline no-border ></b-form-rating>
      </div>
     
      
      <hr/>
      <ul>
        <li 
        v-for="skill in skills" 
        @click="skills.pop(skill)"
        v-bind:key="skill.skill">
        {{skill.skill}}<b-form-rating v-model="skill.skillRating" inline no-border readonly></b-form-rating>
        </li>
      </ul>
    <!-- -----------------------------------skill-end----------------------------------------------- -->


    <!-- --------------------------------------education------------------------------------------ -->

     <strong class="text-black">Eduction</strong>

     <input type="text" placeholder="Education" v-model="education">
     <input type="number" placeholder="remark" v-model="remark">
     <h1><b-icon-plus></b-icon-plus></h1>
    
     <hr/>

         

















  </div>
  </div>

</template>
<script>

export default {
  name: 'Resume',
  data () {
    return {
      name:"Name",
      nameFlag:true,
      email:"example@resume.com",
      emailFlag:true,
      address:"197/2a,Saket Nagar</br>Bhopal,MadhyaPradesh",
      addressFlag:true,
      contact:"9893959352",
      contactFlag:true,
      bio:"Once you’re done writing your professional resume for retail management positions, save it in PDF. This way, you’ll keep your resume layout intact. Just remember to double-check with the job description if the company accepts PDF. ",
      bioFlag:true,
      skills:[{skill:"c",skillRating:2},{skill:"c++",skillRating:4},{skill:"Web-Development",skillRating:1}],
      skillFlag:true,
      temp_a:"",
      temp_b:"",
      higherEducation:[],
      scools:[],



      
    }
  }
  }
 
</script>
<style scoped>

</style>