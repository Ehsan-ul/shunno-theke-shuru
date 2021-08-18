 // 5 ways to get output
      // window.alert('I am learning');
      // alert('this is an alert');
      // document.write('this is a document.write')
      document.getElementById('root').innerHTML = 'this is final output';

      // get output by classname
      document.getElementsByClassName('heading')[0].innerHTML = 'Test Heading';

      prompt('Enter your name')