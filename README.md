## Use

1. Click **Use this template** button to clone this template into your repositories.

2. Go to **Pages**/index.js to custom your information. You will see the customize section like this:

```
// EDIT STARTS HERE:
const domainName = "ohmydomain.vercel.app";
const domainPrice = "$120";

const whoislink = "https://www.iana.org/whois?q=vercel.com";
const domainRegisterName = "Vercel";
const domainRegisterLink = "https://vercel.com";

const domainOwner = "Indiealistic";
const ownerlink = "https://indiealistic.studio";
const contactlink = "mailto:hey@indiealistic.studio?subject=DOMAIN%20ASKING";
// END
```
<details>
<summary>Let me explain the detail</summary>

### domainName
```const domainName = "ohmydomain.vercel.app";```

Edit ```ohmydomain.vercel.app``` to your domain.


### domainPrice
```const domainPrice = "$120";```

Edit ```$120``` to the price you want.


### whoislink
```const whoislink = "https://www.iana.org/whois?q=vercel.com";```

Edit ```https://www.iana.org/whois?q=vercel.com``` to any whois website that you want.


### domainRegisterName
```const domainRegisterName = "Vercel";```

Edit ```Vercel``` to the name of domain register that you using to let the user know.


### domainRegisterLink
```const domainRegisterLink = "https://vercel.com";```

Edit ```https://vercel.com``` to the website link of register.


### domainOwner
```const domainOwner = "Indiealistic";```

Edit ```Indiealistic``` to your name or anyone else if you want.


### ownerlink
```const ownerlink = "https://indiealistic.studio";```

Change ```https://indiealistic.studio``` to the website link of the domain owner


### contactlink
```const contactlink = "mailto:hey@indiealistic.studio?subject=DOMAIN%20ASKING";```

Edit ```mailto:hey@indiealistic.studio?subject=DOMAIN%20ASKING``` to the url that you want. I am using ```mailto:``` link because this will automatically redirect user to their email appication (very good UX if you don't want to use form submit). 

Recommendation: You could use [MailToMe](https://mailtolink.me/) to design your email template. This tool will generate it into an url ```mailto:...``` and you just need to copy it.
</details>

3. Deploy it to [Vercel](https://vercel.com) or anywhere else you want.
