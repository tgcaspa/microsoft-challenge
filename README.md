# microsoft-challenge
Implementation of a cool “MyContacts” web site (in the spirit of the “Contacts”
experience in mobile phones).

## Let's Get Going – Technical Assignment.

It should be a web site, hosted in [Azure App Services](https://docs.microsoft.com/en-us/azure/app-service-web/), with the following functionality
- A grid that shows the names of existing contacts.
- A search box, allowing the user to search contacts by name or phone#. Upon typing in the box, it
filters the grid accordingly (user doesn't have to press the “search” button).
- A “+” button, allowing the user to add a new contact with name and phone.
- The data should be persisted somewhere in the cloud (local disk of the VM/instance, azure blobs
or any other place of your choice).
- Upon visit in the web site's landing page, the data is loaded from storage and presented in the
main grid.