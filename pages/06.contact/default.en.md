---
title: Contact
published: false
visible: false
---

<div class="contact">
  <div class="section-header">
    <h1>Contact Us</h1>
    <p>Please tell us about your project and we will let you know what we can do to help you</p>
  </div>
  
	<div class="container">
	  <div class="row justify-content-center">
	  <div class="text-center">
		  <?php
			if(!empty($statusMsg)){
		  ?>
			  <p class="statusMsg <?php echo !empty($msgClass)?$msgClass:''; ?>"><?php echo $statusMsg; ?></p>
		  <?php
			}
		  ?>
		  </div>

		<form action="" method="post" class="col-12 col-md-8 justify-content-center">
			<div class="form-group bor-top">
			  <input type="text" name="name" class="form-control" placeholder="NAME">
			</div>
			<div class="form-group bor-top">
			  <input type="email" name="email" class="form-control" placeholder="EMAIL">
			</div>
			<div class="form-group bor-bottop">
			   <textarea name="message" class="form-control" rows="5" placeholder="MESSAGES"></textarea>
			</div>
			<div class="form-group col-4 no-border">
			   <input type="submit" name="submit" class="form-control" value="SEND">
			</div>
		</form>

	</div>
  </div>
</div>


  