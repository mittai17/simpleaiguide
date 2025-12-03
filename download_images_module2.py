import os
import urllib.request

urls = [
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfZGUXAZYO6bEVdU5Py49C8Y9gDfDV8Bw2nFq3nKkq_QmzeqYQddXHKfNd-lhmFl-75NSU7F4f_pMi0CeQHxE_TbQMwoSmQI9Zizw85ueJo9YVQ-wbxm_Y5pdA9BUHkT60?key=GvLdYD5KbK_sFluudqMh4A",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJlQjiMAUoRVTt-qcX7jzidhMXhaa9OMnt2BqlrC2i7NZhIEnm80hctOSfd6ksijDkgLYyFkhwURSsOWBhBQ-N9QDuGK0z18jmu2okCMgU7AERUq1jRt4_F9AQgLYYIA?key=GvLdYD5KbK_sFluudqMh4A",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5lM4TxKbIzegdW8ja95nTpFpKkb-18yhgFEcIO7Aqjzunn89cI0bGuFLmpcZT4BXWvSFyye6PSecqWCt4PDxjMaD3IRTW_5QPxjxHa85KrYfdschsiFI8bfRO1flNv3E?key=GvLdYD5KbK_sFluudqMh4A",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdEZXfaiCpatHC_o5BrmIsFzICeJEEb7oNcygZ-oHgtfTkzrexzXQXmQLZ5BPMQnhN0ABezP2KA4M0xrbeEd2CbWORCgjhNZEBs4hw8337TMf5xup26krRrQIK1y57mvrY?key=GvLdYD5KbK_sFluudqMh4A",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeX1OJTEBLCGdfbg1ntBPwbng-5ur5aAK_APnXQ52FJOwp8MyraHFd_uTQ3dDiYlKWAJwlIoi_EWP1SISWfcQ8jU2_KRXHcfacVYx5M7tYea08ygleRrQpN-eSp2aFLOU4?key=GvLdYD5KbK_sFluudqMh4A"
]

output_dir = "public/images/learn/machine-learning/module-2"
os.makedirs(output_dir, exist_ok=True)

for i, url in enumerate(urls):
    try:
        # Guess extension or default to png
        ext = "png"
        filename = f"image-{i+1}.{ext}"
        filepath = os.path.join(output_dir, filename)
        urllib.request.urlretrieve(url, filepath)
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download image {i+1}: {e}")
