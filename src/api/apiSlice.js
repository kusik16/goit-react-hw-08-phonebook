import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://connections-api.herokuapp.com',
	}),
	tagTypes: ['Contacts'],
	endpoints: builder => ({
		getContacts: builder.query({
			query: () => ({
				url: '/contacts',
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}),
			providesTags: ['Contacts'],
		}),
		createContact: builder.mutation({
			query: contact => ({
				url: '/contacts',
				method: 'POST',
				headers: {
					Authorization: localStorage.getItem('token'),
				},
				body: contact,
			}),
			invalidatesTags: ['Contacts'],
		}),
		deleteContact: builder.mutation({
			query: id => ({
				url: `/contacts/${id}`,
				method: 'DELETE',
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}),
			invalidatesTags: ['Contacts'],
		}),
		signUp: builder.mutation({
			query: contact => ({
				url: '/users/signup',
				method: 'POST',
				body: contact,
			}),
			invalidatesTags: ['Contacts'],
		}),
		signIn: builder.mutation({
			query: contact => ({
				url: '/users/login',
				method: 'POST',
				body: contact,
			}),
			invalidatesTags: ['Contacts'],
		}),
		logOut: builder.mutation({
			query: contact => ({
				url: '/users/logout',
				method: 'POST',
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}),
			invalidatesTags: ['Contacts'],
		}),
		getUserInfo: builder.mutation({
			query: () => ({
				url: '/users/current',
				method: 'GET',
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}),
			invalidatesTags: ['Contacts'],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useCreateContactMutation,
	useDeleteContactMutation,
	useSignUpMutation,
	useSignInMutation,
	useLogOutMutation,
	useGetUserInfoMutation,
} = apiSlice;
