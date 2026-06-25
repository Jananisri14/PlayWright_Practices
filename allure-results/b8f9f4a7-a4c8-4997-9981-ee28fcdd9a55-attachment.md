# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblaze.test.ts >> test
- Location: tests\demoblaze.test.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.reload: Test timeout of 30000ms exceeded.
Call log:
  - waiting for navigation until "load"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /account/login?ret=/
                - img "Login" [ref=e88]
                - generic [ref=e89]: Login
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94]:
              - /url: /account/login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: More
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114]:
          - /url: https://www.flipkart.com/
          - generic [ref=e116]:
            - img [ref=e120]
            - generic [ref=e124]: For You
        - link "Fashion" [ref=e129]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e131]:
            - img [ref=e135]
            - generic [ref=e139]: Fashion
        - link "Mobiles" [ref=e144]:
          - /url: /mobile-phones-store
          - generic [ref=e146]:
            - img [ref=e150]
            - generic [ref=e156]: Mobiles
        - link "Beauty" [ref=e161]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e163]:
            - img [ref=e167]
            - generic [ref=e171]: Beauty
        - link "Electronics" [ref=e176]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e178]:
            - img [ref=e182]
            - generic [ref=e185]: Electronics
        - link "Home" [ref=e190]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e192]:
            - img [ref=e196]
            - generic [ref=e199]: Home
        - link "Appliances" [ref=e204]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e206]:
            - img [ref=e210]
            - generic [ref=e215]: Appliances
        - link "Toys, baby.." [ref=e220]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e222]:
            - img [ref=e226]
            - generic [ref=e235]: Toys, baby..
        - link "Food & Health" [ref=e240]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e242]:
            - img [ref=e246]
            - generic [ref=e253]: Food & Health
        - link "Auto Accessories" [ref=e258]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e260]:
            - img [ref=e264]
            - generic [ref=e268]: Auto Accessories
        - link "2 Wheelers" [ref=e273]:
          - /url: /twowheelers-at-store
          - generic [ref=e275]:
            - img [ref=e279]
            - generic [ref=e288]: 2 Wheelers
        - link "Sports & Fitness" [ref=e293]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e295]:
            - img [ref=e299]
            - generic [ref=e304]: Sports & Fitness
        - link "Books & Media" [ref=e309]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e311]:
            - img [ref=e315]
            - generic [ref=e318]: Books & Media
        - link "Furniture" [ref=e323]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e325]:
            - img [ref=e329]
            - generic [ref=e334]: Furniture
    - generic [ref=e342]:
      - link "Image" [ref=e355]:
        - /url: /infinite-m3-at-store?param=38437439&BU=Mixed
        - img "Image" [ref=e358]
      - generic [ref=e373]:
        - link "Image" [ref=e380]:
          - /url: /vivo-t5-pro-5g-coming-soon-store?param=3791&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=RTDG7SVKRHTX_IAD&BU=Mixed
          - img "Image" [ref=e383]
        - link "Image" [ref=e390]:
          - /url: /clothing-and-accessories/topwear/tshirts/mens-tshirts/~cs-tj1hs5ycq5/pr?sid=clo%2Cash%2Cank%2Cedy&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D300&p%5B%5D=facets.type%255B%255D%3DPolo%2BNeck&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&sort=popularity&param=437657&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=JZ3A80DPAHIZ_IAD&BU=Mixed
          - img "Image" [ref=e393]
        - link "Image" [ref=e400]:
          - /url: /ai-nova-2-neo-5g/p/itmdcaa61dad2064?pid=MOBHZ8ZMTFJZHQQ6&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KV9I5NYEVXG2_AD&BU=Mixed
          - img "Image" [ref=e403]
        - link "Image" [ref=e410]:
          - /url: /beauty-and-grooming/~cs-8076mzujts/pr?sid=g9b&collection-tab-name=Biotique+Skin+Care&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AIB4YG1CN99D_AD&BU=Mixed
          - img "Image" [ref=e413]
        - link "Image" [ref=e420]:
          - /url: /realme-p4-5g-steel-grey-128-gb/p/itmf836e6de035a5?pid=MOBHMYR3EJZ8J2ES&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EBJ34G3TILXD_AD&BU=Mixed
          - img "Image" [ref=e423]
        - link "Image" [ref=e430]:
          - /url: /ai-nova-2-pro-5g/p/itmacb10a3dd51c6?pid=MOBHZ8ZM8BUGCJDQ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BMIECZ2DIUDC_AD&BU=Mixed
          - img "Image" [ref=e433]
        - link "Image" [ref=e440]:
          - /url: /nothing-phone-2026-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RUPJH35VFQEZ_AD&BU=Mixed
          - img "Image" [ref=e443]
        - link "Image" [ref=e450]:
          - /url: /6bo/b5g/~cs-x0g2s4oy40/pr?sid=6bo%2Cb5g&collection-tab-name=Core+Ultra&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=C2YE64YDI75X_AD&BU=Mixed
          - img "Image" [ref=e453]
        - link "Image" [ref=e460]:
          - /url: /audio-video/~cs-3i512hhgdy/pr?sid=0pm&collection-tab-name=MIVI&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FFVJT1KJXIPN_AD&BU=Mixed
          - img "Image" [ref=e463]
        - link "Image" [ref=e470]:
          - /url: /beauty-and-grooming/~cs-bc3vva6xb3/pr?sid=g9b&collection-tab-name=lotus+monk+and+metal&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=M6QWXFUESTXD_AD&BU=Mixed
          - img "Image" [ref=e473]
      - generic [ref=e496]:
        - link "Image" [ref=e501]:
          - /url: /beauty-and-grooming/fragrances/~cs-tlauo7xcz3/pr?sid=g9b%2C0yh&p%5B%5D=facets.brand%255B%255D%3DBELLAVITA&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L9V8RU0IPAO2_AD&BU=Mixed
          - img "Image" [ref=e504]
        - link "Image" [ref=e509]:
          - /url: /laptops/~cs-on7kzbe0ef/pr?sid=6bo%2Cb5g&collection-tab-name=Chromebook&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=7ED0KWQ4HTMC_AD&BU=Mixed
          - img "Image" [ref=e512]
        - link "Image" [ref=e517]:
          - /url: /beauty-and-grooming/~cs-1zxapwtsce/pr?sid=g9b&collection-tab-name=Dove+&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ATZXL3DMF4C4_AD&BU=Mixed
          - img "Image" [ref=e520]
      - generic [ref=e530]:
        - generic [ref=e534]:
          - img "Image" [ref=e537]
          - generic [ref=e541]: Popular nearby
        - generic [ref=e544]:
          - link "Image Top Sellers Up to 90% Off" [ref=e549]:
            - /url: /all/~cs-627db39efa6ccfe35ce3e01e39d880f5/pr?sid=0pm%2Cfcn&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA5MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQUNDR1JIOURWR1FDRjVDRiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sImRpc2NvdW50X3JhbmdlX3YxIjp7InJhbmdlVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6ImRpc2NvdW50X3JhbmdlX3YxIiwiaW5mZXJlbmNlVHlwZSI6IkZBQ0VUIiwibWluIjpudWxsLCJtYXgiOjkwLjAsInZhbHVlVHlwZSI6IlJBTkdFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiSGVhZHNldCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e559]
            - generic [ref=e562]:
              - generic [ref=e563]: Top Sellers
              - generic [ref=e564]: Up to 90% Off
          - link "Image Popular Min. 70% Off" [ref=e569]:
            - /url: /all/~cs-52421d5e45fb7e6543367c89c83fc1df/pr?sid=clo%2Cqfl%2Cwp7%2Czpk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJWRVNIRlRHMllSWlVFSERHIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBWZXN0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e579]
            - generic [ref=e582]:
              - generic [ref=e583]: Popular
              - generic [ref=e584]: Min. 70% Off
          - link "Image Widest Range Min. 60% Off" [ref=e589]:
            - /url: /all/~cs-0425ecab0dd1458bf6293d12be58b9b2/pr?sid=clo%2Cnyk%2Czp4&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDYwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUS1NIQVhYSEhGUkdBWTVUIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjYwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBUcmFja3N1aXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e599]
            - generic [ref=e602]:
              - generic [ref=e603]: Widest Range
              - generic [ref=e604]: Min. 60% Off
          - link "Image Top Picks Top Rated" [ref=e609]:
            - /url: /all/~cs-656ccde361a2089beda28849661e2092/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJSQ1RIQUFKN0dTUlpGNktIIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e619]
            - generic [ref=e622]:
              - generic [ref=e623]: Top Picks
              - generic [ref=e624]: Top Rated
      - generic [ref=e634]:
        - generic [ref=e638]:
          - img "Image" [ref=e641]
          - generic [ref=e643]:
            - generic [ref=e645]: Back to Campus Deals
            - link [ref=e646]:
              - /url: /offers-list/back-to-campus-deals?screen=dynamic&pk=contentTags%3DGCD_THEME_7~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e649]
        - generic [ref=e653]:
          - link "Image Electric Bikes & Scooters Special offer" [ref=e658]:
            - /url: https://www.flipkart.com/all/~cs-1ae8bd4a7a6f12e050ffc55616fbbdb5/pr?sid=7dk,0aj,kuz&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e668]
            - generic [ref=e671]:
              - generic [ref=e672]: Electric Bikes & Scooters
              - generic [ref=e673]: Special offer
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e678]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e688]
            - generic [ref=e691]:
              - generic [ref=e692]: Men’s Slippers & Flip Flops
              - generic [ref=e693]: Min. 70% Off
          - link "Image Wallets Min. 70% Off" [ref=e698]:
            - /url: https://www.flipkart.com/all/~cs-9a61ff94f187ed7c75a76820712d7907/pr?sid=reh,cca,h76&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e708]
            - generic [ref=e711]:
              - generic [ref=e712]: Wallets
              - generic [ref=e713]: Min. 70% Off
          - link "Image Men’s Sandals & Floaters Min. 70% Off" [ref=e718]:
            - /url: https://www.flipkart.com/all/~cs-7a04c87a03d025d968662615918edf2d/pr?sid=osp,cil,e83&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e728]
            - generic [ref=e731]:
              - generic [ref=e732]: Men’s Sandals & Floaters
              - generic [ref=e733]: Min. 70% Off
      - generic [ref=e743]:
        - generic [ref=e747]: Brands in Spotlight
        - generic [ref=e749]:
          - link "Image" [ref=e754]:
            - /url: /kyh/~cs-rfs4c9mddo/pr?sid=kyh&collection-tab-name=Wowper&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZW3S80RIUG0K_AD&BU=Mixed
            - img "Image" [ref=e757]
          - link "Image" [ref=e762]:
            - /url: /beauty-and-grooming/~cs-lm7ar0nmsu/pr?sid=g9b&collection-tab-name=HA+pure&sort=price_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=8R16CTOTJU02_AD&BU=Mixed
            - img "Image" [ref=e765]
          - link "Image" [ref=e770]:
            - /url: /beauty-and-grooming/~cs-d8fcj7dt5n/pr?sid=g9b&collection-tab-name=oral-b&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JMBHUJMENZ43_AD&BU=Mixed
            - img "Image" [ref=e773]
      - generic [ref=e785]:
        - link "Image" [ref=e790]:
          - /url: /triggr-punkheadz-z3-latest-bt-v6-0-50h-battery-dual-pairing-40mm-drivers-enc-bluetooth/p/itm9f70579eeb7ee?pid=ACCHCY6ATG5D9XH9&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZCPDDQP8WXWS_AD&BU=Mixed
          - img "Image" [ref=e793]
        - link "Image" [ref=e798]:
          - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHE36MYXVCDHGH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=QCGCAPGHCMHX_AD&BU=Mixed
          - img "Image" [ref=e801]
        - link "Image" [ref=e806]:
          - /url: /triggr-punkheadz-z3-latest-bt-v6-0-50h-battery-dual-pairing-40mm-drivers-enc-bluetooth/p/itm9f70579eeb7ee?pid=ACCHEYV9Q6QSQ9VF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L5IC16H8M6WL_AD&BU=Mixed
          - img "Image" [ref=e809]
      - link "Image" [ref=e820]:
        - /url: /goat-sale-store?param=1067&BU=Mixed
        - img "Image" [ref=e826]
      - generic [ref=e836]:
        - generic [ref=e840]:
          - img "Image" [ref=e843]
          - generic [ref=e845]:
            - generic [ref=e847]: Home Decor & Furnishing
            - link [ref=e848]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_2~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e851]
        - generic [ref=e855]:
          - link "Image Torches Min. 50% Off" [ref=e860]:
            - /url: https://www.flipkart.com/all/~cs-e1cee6e066029cfb65c3a362ac7e9e20/pr?sid=jhg,yqn,db9&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e870]
            - generic [ref=e873]:
              - generic [ref=e874]: Torches
              - generic [ref=e875]: Min. 50% Off
          - link "Image Wall Clocks Widest Range" [ref=e880]:
            - /url: https://www.flipkart.com/all/~cs-8b813c3829a3723aebaef347eba7112a/pr?sid=arb,kjw,bm1&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e890]
            - generic [ref=e893]:
              - generic [ref=e894]: Wall Clocks
              - generic [ref=e895]: Widest Range
          - link "Image Mosquito Nets Min. 50% Off" [ref=e900]:
            - /url: https://www.flipkart.com/all/~cs-c78b4ec8e16ed557c9a8a8da7fa4d261/pr?sid=jra,knw,i6y&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e910]
            - generic [ref=e913]:
              - generic [ref=e914]: Mosquito Nets
              - generic [ref=e915]: Min. 50% Off
          - link "Image Bedsheets Min. 50% Off" [ref=e920]:
            - /url: https://www.flipkart.com/all/~cs-89a47b7cac3becbe3edf32cde6810062/pr?sid=jra,knw,qcw&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e930]
            - generic [ref=e933]:
              - generic [ref=e934]: Bedsheets
              - generic [ref=e935]: Min. 50% Off
      - generic [ref=e945]:
        - generic [ref=e949]:
          - img "Image" [ref=e952]
          - generic [ref=e956]: Trends you may like
        - generic [ref=e959]:
          - link "Image Bodycon" [ref=e965]:
            - /url: https://www.flipkart.com/all/~cs-e974e1126b66238059a4568eaa45c666/pr?sid=clo,odx,maj,jhy&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e966]:
              - img "Image" [ref=e974]
              - generic [ref=e980]: Bodycon
          - link "Image HealthyCooking" [ref=e986]:
            - /url: https://www.flipkart.com/all/~cs-b1bf49cc3fd651211bc583ad1f2be149/pr?sid=upp&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e987]:
              - img "Image" [ref=e995]
              - generic [ref=e1001]: HealthyCooking
          - link "Image Minimalist Decor" [ref=e1007]:
            - /url: https://www.flipkart.com/all/~cs-239ab63d202a1dd9d3c20c9358e154dc/pr?sid=arb&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e1008]:
              - img "Image" [ref=e1016]
              - generic [ref=e1022]: Minimalist Decor
          - link "Image SquareDial" [ref=e1028]:
            - /url: https://www.flipkart.com/all/~cs-ce100426d79cd1f0ae2b68656447a9ec/pr?sid=r18,f13&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e1029]:
              - generic [ref=e1035]:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - img "Image"
              - generic [ref=e1041]: SquareDial
      - generic [ref=e1045]: Hang on, loading content
      - generic [ref=e1057]:
        - generic [ref=e1058]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1059]: +
      - contentinfo [ref=e1060]:
        - generic [ref=e1062]:
          - generic [ref=e1063]:
            - generic [ref=e1064]:
              - generic [ref=e1065]: ABOUT
              - link "Contact Us" [ref=e1066]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1067]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1068]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1069]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1070]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1071]:
                - /url: /corporate-information
            - generic [ref=e1072]:
              - generic [ref=e1073]: GROUP COMPANIES
              - link "Myntra" [ref=e1074]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1075]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1076]:
                - /url: https://www.shopsy.in
            - generic [ref=e1077]:
              - generic [ref=e1078]: HELP
              - link "Payments" [ref=e1079]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1080]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1081]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1082]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1083]:
              - generic [ref=e1084]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1085]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1086]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1087]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1088]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1089]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1090]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1091]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1092]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1093]:
              - generic [ref=e1094]: "Mail Us:"
              - generic [ref=e1095]:
                - paragraph [ref=e1096]: Flipkart Internet Private Limited,
                - paragraph [ref=e1097]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1098]: Clove Embassy Tech Village,
                - paragraph [ref=e1099]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1100]: Bengaluru, 560103,
                - paragraph [ref=e1101]: Karnataka, India
              - generic [ref=e1102]: "Social:"
              - generic [ref=e1103]:
                - link "Facebook" [ref=e1105]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1106]
                - link "Twitter" [ref=e1108]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1109]
                - link "YouTube" [ref=e1111]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1112]
                - link "Instagram" [ref=e1114]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1115]
            - generic [ref=e1116]:
              - generic [ref=e1117]: "Registered Office Address:"
              - generic [ref=e1118]:
                - paragraph [ref=e1119]: Flipkart Internet Private Limited,
                - paragraph [ref=e1120]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1121]: Clove Embassy Tech Village,
                - paragraph [ref=e1122]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1123]: Bengaluru, 560103,
                - paragraph [ref=e1124]: Karnataka, India
                - paragraph [ref=e1125]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1126]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1127]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1128]:
                    - /url: tel:044-67415800
          - generic [ref=e1129]:
            - generic [ref=e1130]:
              - img "Become a Seller" [ref=e1131]
              - link "Become a Seller" [ref=e1132]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1133]:
              - img "Advertise" [ref=e1134]
              - generic "Advertise" [ref=e1135]
            - generic [ref=e1136]:
              - img "Gift Cards" [ref=e1137]
              - link "Gift Cards" [ref=e1138]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1139]:
              - img "Help Center" [ref=e1140]
              - link "Help Center" [ref=e1141]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1142]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1144]:
    - button "✕" [ref=e1145] [cursor=pointer]
    - generic [ref=e1147]:
      - generic [ref=e1148]:
        - text: Login
        - paragraph [ref=e1149]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1152]:
        - generic [ref=e1153]:
          - textbox [active] [ref=e1154]
          - generic: Enter Email/Mobile number
        - generic [ref=e1155]:
          - text: By continuing, you agree to Flipkart's
          - link "Terms of Use" [ref=e1156]:
            - /url: /pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1157]:
            - /url: /pages/privacypolicy
          - text: .
        - button "Request OTP" [ref=e1159] [cursor=pointer]
        - link "New to Flipkart? Create an account" [ref=e1161]:
          - /url: /account/login?signup=true
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { url } from 'node:inspector';
  3  | 
  4  | test('test', async ({ page }) => {
  5  |   await page.goto('https://www.demoblaze.com/');
  6  |   await page.getByRole('link', { name: 'Log in' }).click();
  7  |   await page.locator('#loginusername').click();
  8  |   await page.locator('#loginusername').fill('admin');
  9  |   await page.locator('#loginpassword').click();
  10 |   await page.locator('#loginpassword').fill('admin');
  11 |   await page.getByRole('button', { name: 'Log in' }).click();
  12 |   const title=await page.title();
  13 |   console.log("Title:",title);
  14 |   const url=await page.url();
  15 |   console.log("URL:",url);
  16 |   const html=await page.content();
  17 |   console.log("HTML:",html);
  18 |   await expect(page.getByRole('link', { name: 'Welcome admin' })).toBeVisible();
  19 |   await page.waitForTimeout(5000);
  20 |   await page.goto("https://www.flipkart.com/")
  21 |   await page.goBack();
  22 |   await page.waitForTimeout(5000);
  23 |   await page.goForward();
  24 |   await page.waitForTimeout(5000);
> 25 |   await page.reload();
     |              ^ Error: page.reload: Test timeout of 30000ms exceeded.
  26 |   await page.waitForTimeout(5000);
  27 |   await page.close();
  28 | });
```