export function fixBase64Format(array) {
    for (let i = 0; i < array.length; i++) {
        let { name, base64 } = array[i];
    
        // Check if the current format is dataimage/jpegbase64
        if (base64.startsWith('dataimage/jpegbase64')) {
          // Extract the current base64 content
          const base64Content = base64.replace('dataimage/jpegbase64/', '');
    
          // Create the new base64 with the correct format
          const newBase64 = `data:image/jpeg;base64,/${base64Content}`;
    
          // Update the element in the array with the new base64
          array[i] = { name, base64: newBase64 };
        }
      }
    // Return the modified array
    return array;
  }
  