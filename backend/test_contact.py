"""
Test script for the contact API endpoint
Run this to test if the contact form email sending is working
"""
import requests
import json

API_URL = "https://zeex-website-backend-1.onrender.com/api/contact"

test_data = {
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from the contact form"
}

print("Testing contact form API...")
print(f"URL: {API_URL}")
print(f"Data: {json.dumps(test_data, indent=2)}")
print("\nSending request...")

try:
    response = requests.post(
        API_URL,
        json=test_data,
        headers={"Content-Type": "application/json"},
        timeout=30
    )
    
    print(f"\nStatus Code: {response.status_code}")
    print(f"Response Headers: {dict(response.headers)}")
    
    try:
        data = response.json()
        print(f"Response Data: {json.dumps(data, indent=2)}")
    except:
        print(f"Response Text: {response.text}")
    
    if response.status_code == 200 and data.get('success'):
        print("\n✅ SUCCESS: Email should have been sent!")
    else:
        print(f"\n❌ FAILED: {data.get('message', 'Unknown error')}")
        
except requests.exceptions.RequestException as e:
    print(f"\n❌ ERROR: {str(e)}")
    print("\nPossible issues:")
    print("1. Backend server might be down")
    print("2. Network connectivity issue")
    print("3. CORS configuration issue")
    print("4. Backend URL might be incorrect")

