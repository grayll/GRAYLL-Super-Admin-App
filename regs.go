package main

import (
	json "encoding/json"
	"time"

	"google.golang.org/api/iterator"

	"fmt"

	"golang.org/x/net/context"

	firebase "firebase.google.com/go"
	//"firebase.google.com/go/auth"

	"google.golang.org/api/option"
)

type User struct {
	ActivatedAt    int64  `json:"ActivatedAt"`
	CreatedAt      int64  `json:"CreatedAt"`
	Email          string `json:"Email"`
	ID             int    `json:"Id"`
	IsVerified     bool   `json:"IsVerified"`
	LoanPaidStatus int    `json:"LoanPaidStatus"`
}

func main() {

}

func New7d() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("gradm-cd4ed-firebase-adminsdk-t6vp4-e4d51ccd20.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		//return nil, fmt.Errorf("error initializing app: %v", err)
		fmt.Println(app, "\n", err)
	}
	fmt.Println(app)
	client, err := app.Firestore(ctx)
	if err != nil {
		fmt.Println(err)
	}

	iter := client.Collection("users").Documents(ctx)
	count := 0
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			fmt.Println("Failed to iterate: ", err)
		}

		jsonbody, err := json.Marshal(doc.Data())
		if err != nil {
			// do error check
			fmt.Println(err)

		}
		user := User{}
		if err := json.Unmarshal(jsonbody, &user); err != nil {
			// do error check
			fmt.Println(err)

		}

		if user.CreatedAt >= time.Now().Unix()-604800 && user.LoanPaidStatus == 1 {
			count++

		}
	}
	_, _, err = client.Collection("UserManagement").Doc("UserAccounts ").Collection("NewUserRegistrations").Doc("24h").Collection("24h").Add(ctx, map[string]interface{}{
		"count": count,
	})
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		fmt.Println("An error has occurred:", err)
	}
}

func New28d() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("gradm-cd4ed-firebase-adminsdk-t6vp4-e4d51ccd20.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		//return nil, fmt.Errorf("error initializing app: %v", err)
		fmt.Println(app, "\n", err)
	}
	fmt.Println(app)
	client, err := app.Firestore(ctx)
	if err != nil {
		fmt.Println(err)
	}

	iter := client.Collection("users").Documents(ctx)
	count := 0
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			fmt.Println("Failed to iterate: ", err)
		}

		jsonbody, err := json.Marshal(doc.Data())
		if err != nil {
			// do error check
			fmt.Println(err)

		}
		user := User{}
		if err := json.Unmarshal(jsonbody, &user); err != nil {
			// do error check
			fmt.Println(err)

		}

		if user.CreatedAt >= time.Now().Unix()-2419200 && user.LoanPaidStatus == 1 {
			count++

		}
	}
	_, _, err = client.Collection("UserManagement").Doc("UserAccounts ").Collection("NewUserRegistrations").Doc("24h").Collection("24h").Add(ctx, map[string]interface{}{
		"count": count,
	})
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		fmt.Println("An error has occurred:", err)
	}
}

func Regs24h() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("gradm-cd4ed-firebase-adminsdk-t6vp4-e4d51ccd20.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		//return nil, fmt.Errorf("error initializing app: %v", err)
		fmt.Println(app, "\n", err)
	}
	fmt.Println(app)
	client, err := app.Firestore(ctx)
	if err != nil {
		fmt.Println(err)
	}

	iter := client.Collection("users").Documents(ctx)
	count := 0
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			fmt.Println("Failed to iterate: ", err)
		}

		jsonbody, err := json.Marshal(doc.Data())
		if err != nil {
			// do error check
			fmt.Println(err)

		}
		user := User{}
		if err := json.Unmarshal(jsonbody, &user); err != nil {
			// do error check
			fmt.Println(err)

		}

		if user.CreatedAt >= time.Now().Unix()-86400 && user.LoanPaidStatus == 2 {
			count++

		}
	}
	_, _, err = client.Collection("UserManagement").Doc("UserAccounts ").Collection("NewUserRegistrations").Doc("24h").Collection("24h").Add(ctx, map[string]interface{}{
		"count": count,
	})
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		fmt.Println("An error has occurred:", err)
	}
}

func Regs7d() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("gradm-cd4ed-firebase-adminsdk-t6vp4-e4d51ccd20.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		//return nil, fmt.Errorf("error initializing app: %v", err)
		fmt.Println(app, "\n", err)
	}
	fmt.Println(app)
	client, err := app.Firestore(ctx)
	if err != nil {
		fmt.Println(err)
	}

	iter := client.Collection("users").Documents(ctx)
	count := 0
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			fmt.Println("Failed to iterate: ", err)
		}

		jsonbody, err := json.Marshal(doc.Data())
		if err != nil {
			// do error check
			fmt.Println(err)

		}
		user := User{}
		if err := json.Unmarshal(jsonbody, &user); err != nil {
			// do error check
			fmt.Println(err)

		}

		if user.CreatedAt >= time.Now().Unix()-604800 && user.LoanPaidStatus == 2 {
			count++

		}
	}
	_, _, err = client.Collection("UserManagement").Doc("UserAccounts ").Collection("NewUserRegistrations").Doc("24h").Collection("24h").Add(ctx, map[string]interface{}{
		"count": count,
	})
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		fmt.Println("An error has occurred:", err)
	}
}

func Regs28d() {
	ctx := context.Background()
	opt := option.WithCredentialsFile("gradm-cd4ed-firebase-adminsdk-t6vp4-e4d51ccd20.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		//return nil, fmt.Errorf("error initializing app: %v", err)
		fmt.Println(app, "\n", err)
	}
	fmt.Println(app)
	client, err := app.Firestore(ctx)
	if err != nil {
		fmt.Println(err)
	}

	iter := client.Collection("users").Documents(ctx)
	count := 0
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			fmt.Println("Failed to iterate: ", err)
		}

		jsonbody, err := json.Marshal(doc.Data())
		if err != nil {
			// do error check
			fmt.Println(err)

		}
		user := User{}
		if err := json.Unmarshal(jsonbody, &user); err != nil {
			// do error check
			fmt.Println(err)

		}

		if user.CreatedAt >= time.Now().Unix()-2419200 && user.LoanPaidStatus == 2 {
			count++

		}
	}
	_, _, err = client.Collection("UserManagement").Doc("UserAccounts ").Collection("NewUserRegistrations").Doc("24h").Collection("24h").Add(ctx, map[string]interface{}{
		"count": count,
	})
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		fmt.Println("An error has occurred:", err)
	}
}
