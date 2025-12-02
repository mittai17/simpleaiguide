import urllib.request
import os

images = {
    "weak-ai-chess.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXclf0HKA8qMw67gknySXdqJ1PQTz78eTbLk6uLW4flXBwWM_ZDMmy_C_h54n9tCGCbM19YbVrV1D58PczP3H-NxOQWPkrxMvCSBoz7XlCLRtfS1MtuKgbu8K-UMMRDGC7U?key=GvLdYD5KbK_sFluudqMh4A",
    "strong-ai-versatile.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdH7rMYm8_A4QpHBXeAVCJH1HbG7aNMo7i2iNhFFsyawl9oDJOrgFT5jde2PwYbMylrxKe8UnhW0CB-gJJgxcfp9YloJNhYOUq2rUADpcst3gn3sVuFy9FAvPagurKjPs4?key=GvLdYD5KbK_sFluudqMh4A",
    "super-ai-brain.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9wMM8RwiroivI0iixqOD_Gq5c4lKMOOOS0qlcgvGrMjthBmdA6h6lWOQU9uuXxTYGRO_7HXoiytcib0NNh2jcIoE2TWBgVVkdkDCqprH6khJwNf9ywAM6n9xUsJS159M?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-5.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeva1nyd0vLpsuMgE7dxYyoCp3kgAvaP0hRqa6BbmxkBoSxdppi70LKboiKIvRtsg7qgrtU1InJP9soF5sUqzZyJT6i3HFsaRA_a-bUqfCUE3Shzt5yPBo7jD7MJGzKGT8?key=GvLdYD5KbK_sFluudqMh4A", # Fig 1
    "module-1-5-fig2.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf36MQ45R-bMDvr9N2SYqUjM3pawMuXuL_XmUABazL_0vDUdnMs6k2UPKA0Kb30_cv51a2ljGaUQUP11Mt6NBBEvL2S2h_yZb01bMQs-9Zi9GAvgN2mI-yRk6vy5fdeFQk?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-5-fig3.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXexHi_jkZSv3hCkYDajD_-NzR3yTMnOgicEjVZmKcfl7dN93LTahArjK6yEZVQFIM9CTIjzXnio5p2Q0w_EX3y7e-ZVNaft8Y8coJJO-64DnxhWEBSI_aHE9dG89Dq3S9Y?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-5-fig4.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVBphObG4zIXZSLg3vB3QIIKB0DMkwzTlnWfwuRWBqT1nbJg_oAgraDwpuvK2ASBZibXvriGFXLzETZ3VL5MZGQVvnX_qxkIvwYlhTv8AFBm-uNTlbtIUBuHfwsQQ7RQ?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-6.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdEEcBFJOpyLIzeQhjfhCquhAAOoSNqU6stcLNBep-yAK0JGcRSvmTFwBQ9_TNvaAn22vCXjbprudXbPIMGFa57cNNWkQj1FQKANdidEvHjBgCqy0vppaiOrDSDEGHwDYc?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-7.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-EDWFhsCQ0JDhrWiOgORanwrwCZIqwSP8e9dhDcr9UijfYvrOytZK1lA_uD-wA3tWO1UEo0a9TY5t3zB0FCgjlU_BFJZF-hG2HPBiL81Ijj5aIEbICZo8rcJ-_kshYw?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-8.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdwWtt64acFrS8XJw9vClnSdd24has4Ot6CnhBf0xpWOvUS19_3qwNwRwcUF59j81KEZMXeT5k17mDHQgNGSUKNs7oulBV3QpHQfezA14AFpCBnQ6dJ-8RDs4abwikawGw?key=GvLdYD5KbK_sFluudqMh4A",
    "module-1-10.png": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXerFkmUTsaewytfxEMEc7FHKL-Uq9-0qp8psfe1T5GbxPukrCg6YIv3bb1OGaCfiHM7xQicIyRY_zQ3GimpromVswDzibDQZ0ze2DrctHpA5nmDFlyjxuIoil-6KQQzmw?key=GvLdYD5KbK_sFluudqMh4A"
}

output_dir = r"c:\Users\ggiri\Documents\new-vs-code\website\public\images\learn\ai-basics"

for filename, url in images.items():
    try:
        filepath = os.path.join(output_dir, filename)
        urllib.request.urlretrieve(url, filepath)
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
