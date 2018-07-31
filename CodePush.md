**React Native and CodePush integration**

[CodePush](https://microsoft.github.io/code-push) is a cloud service that enables React Native developers to deploy mobile app updates **instantly** to their users’ devices.

### Installation Steps:

```bash
# Install Code Push CLI globally
npm install -g code-push-cli

# Create a Code Push Account
code-push register

# Register your app with CodePush
code-push app add <AppName> <OS> 

# Install CodePush module
npm install --save react-native-code-push@latest

# Link the CodePush module with your iOS and Android projects
react-native link react-native-code-push  

# After react-native link, if you get error in 'MainApplication.java', add the below line to 'MainApplication.java'
import com.microsoft.codepush.react.CodePush;
```
### Wrap your root component with the  `codePush`  higher-order component:

    import  React  from  'react';
    import  codePush  from  "react-native-code-push";
    
      
    
    let  codePushOptions  =  { checkFrequency:  codePush.CheckFrequency.ON_APP_RESUME  };
    
    class  App  extends  React.Component  {
    
	    render(){
		    return (
			    ...
		    );
	    }
    }
    
      
    
    export  default  codePush(codePushOptions)(App);

### CodePush Commands:

    # List deploment keys and check install metrics
    code-push deployment ls <AppName> -k

	# Release changes
	code-push release-react <AppName> <OS>

	# Release changes for Production build
	code-push release-react <AppName> <OS> --deploymentName Production
	
	# Release Loanguru android app changes
	code-push release-react akash.anand708/movie-finder android --deploymentName Production
	
	# Release Loanguru IOS app changes
	code-push release-react akash.anand708/movie-finder-ios ios --deploymentName Production



