div class="login">
  <h4 ng-if="!vm.currentUser.username"> Hi, {{ vm.user.username}} </h4>
  <button ng-if="!!vm.currentUser.username" ng-click="vm.logout()" >logout</button>
  <form ng-if="!vm.currentUser.username" ng-submit="vm.login()">
    <label for="username">Username:</label>
    <input type="text" ng-model="vm.userForm.username" required><br>
    <label for="username">  Email:</label>
    <input type="email" ng-model="vm.userForm.email" required><br>
    <label for="username">Password:</label>
    <input type="text" ng-model="vm.userForm.password" required><br>
    <input type="submit" value="login">
  </form>
</div>

  <form ng-if="!vm.currentUser.username" ng-submit="vm.register()">
    <label for="username">Username:</label>
    <input type="text" ng-model="vm.newUser.username" required><br>
    <label for="username">  Email:</label>
    <input type="email" ng-model="vm.newUser.email" required><br>
    <label for="username">Password:</label>
    <input type="text" ng-model="vm.newUser.password" required><br>
    <input type="submit" value="Register">
  </form>
