json.partial! '/api/shared/user', user: @user, errors: @errors
json.stores @user.stores, :id
